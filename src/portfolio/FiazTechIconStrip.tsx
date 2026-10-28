import { techStackIcons } from './fiazTechStackIcons'
import FiazTechBrandIcon from './FiazTechBrandIcon'

const loopIcons = [...techStackIcons, ...techStackIcons]

export default function FiazTechIconStrip() {
  return (
    <div className="fiaz-tech-marquee" aria-label="Technologies and automation tools">
      <div className="fiaz-tech-marquee-fade fiaz-tech-marquee-fade-left" aria-hidden />
      <div className="fiaz-tech-marquee-fade fiaz-tech-marquee-fade-right" aria-hidden />
      <div className="fiaz-tech-marquee-viewport">
        <div className="fiaz-tech-marquee-track" role="list">
          {loopIcons.map((brand, index) => (
            <span
              key={`${brand.id}-${index}`}
              className="fiaz-tech-icon-chip"
              role="listitem"
              title={brand.label}
            >
              <FiazTechBrandIcon brand={brand} size={22} />
              <span className="sr-only">{brand.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
