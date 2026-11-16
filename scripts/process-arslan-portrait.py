"""Professional Arslan hero/profile JPGs (dark UpForge-style grade, optional rembg)."""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

SRC = Path(
    r"C:\Users\hp\Downloads\WhatsApp Image 2026-11-16 at 2.43.38 PM.jpeg"
)
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "Arslan"
SIZE = 1024


def try_rembg(im: Image.Image) -> Image.Image | None:
    try:
        from rembg import remove

        return remove(im)
    except Exception:
        return None


def studio_backdrop(size: int) -> Image.Image:
    base = Image.new("RGB", (size, size), (6, 10, 18))
    layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    cx, cy = size // 2, int(size * 0.38)
    for radius, color in (
        (int(size * 0.62), (15, 23, 42, 255)),
        (int(size * 0.45), (12, 18, 32, 255)),
        (int(size * 0.30), (34, 211, 238, 22)),
        (int(size * 0.18), (37, 99, 235, 38)),
    ):
        draw.ellipse(
            (cx - radius, cy - radius, cx + radius, cy + radius),
            fill=color,
        )
    return Image.alpha_composite(base.convert("RGBA"), layer).convert("RGB")


def grade_portrait(im: Image.Image) -> Image.Image:
    im = ImageEnhance.Color(im).enhance(0.92)
    im = ImageEnhance.Contrast(im).enhance(1.08)
    im = ImageEnhance.Brightness(im).enhance(0.97)
    im = ImageEnhance.Sharpness(im).enhance(1.12)
    return im


def vignette_edges(im: Image.Image) -> Image.Image:
    w, h = im.size
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((-w * 0.08, -h * 0.05, w * 1.08, h * 1.05), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(28))
    dark = Image.new("RGB", (w, h), (4, 6, 12))
    return Image.composite(im, dark, mask)


def layout_cutout(cutout: Image.Image, backdrop: Image.Image, height_ratio: float, y_frac: float) -> Image.Image:
    cutout = cutout.convert("RGBA")
    bbox = cutout.getbbox()
    if bbox:
        cutout = cutout.crop(bbox)
    target_h = int(SIZE * height_ratio)
    scale = target_h / cutout.height
    target_w = int(cutout.width * scale)
    subject = cutout.resize((target_w, target_h), Image.Resampling.LANCZOS)
    canvas = backdrop.copy().convert("RGBA")
    x = (SIZE - target_w) // 2
    y = int((SIZE - target_h) * y_frac)
    canvas.paste(subject, (x, y), subject)
    out = canvas.convert("RGB")
    return vignette_edges(grade_portrait(out))


def layout_photo(im: Image.Image, backdrop: Image.Image) -> Image.Image:
    """Keep full photo; replace outer tan via vignette (no chroma-key)."""
    fitted = ImageOps.fit(im, (SIZE, SIZE), method=Image.Resampling.LANCZOS, centering=(0.5, 0.32))
    fitted = grade_portrait(fitted)
    # Multiply blend toward backdrop at edges
    vignette = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(vignette)
    draw.ellipse((-int(SIZE * 0.12), -int(SIZE * 0.08), int(SIZE * 1.12), int(SIZE * 1.04)), fill=255)
    vignette = vignette.filter(ImageFilter.GaussianBlur(36))
    comp = Image.composite(fitted, backdrop, vignette)
    return vignette_edges(comp)


def main() -> int:
    if not SRC.is_file():
        print(f"Missing source: {SRC}", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    original = ImageOps.exif_transpose(Image.open(SRC))
    backdrop = studio_backdrop(SIZE)

    cutout = try_rembg(original)
    if cutout is not None:
        profile = layout_cutout(cutout, backdrop, height_ratio=0.9, y_frac=0.06)
        hero = layout_cutout(cutout, backdrop, height_ratio=0.94, y_frac=0.04)
    else:
        profile = layout_photo(original, backdrop)
        hero = layout_photo(original, backdrop)

    profile_path = OUT_DIR / "arslan-profile.jpg"
    hero_path = OUT_DIR / "arslan-profile-hero.jpg"
    profile.save(profile_path, "JPEG", quality=93, optimize=True)
    hero.save(hero_path, "JPEG", quality=93, optimize=True)
    print(f"Wrote {profile_path} (rembg={'yes' if cutout is not None else 'vignette'})")
    print(f"Wrote {hero_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())