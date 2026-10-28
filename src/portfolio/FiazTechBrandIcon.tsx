import type { TechStackIcon } from './fiazTechStackIcons'

type Props = {
  brand: TechStackIcon
  size?: number
  className?: string
}

export default function FiazTechBrandIcon({ brand, size = 24, className }: Props) {
  if (brand.Icon) {
    const Icon = brand.Icon
    return (
      <Icon
        className={className}
        size={size}
        aria-hidden
        style={brand.tint ? { color: brand.tint } : undefined}
      />
    )
  }

  if (brand.imageSrc) {
    return (
      <img
        className={className}
        src={brand.imageSrc}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return null
}
