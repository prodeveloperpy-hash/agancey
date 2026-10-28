import { TextLoop } from './motion-primitives/TextLoop'

const traits = ['Modern', 'Fast', 'Secure', 'Scalable'] as const

type Props = {
  align?: 'center' | 'left'
}

export function BizTagline({ align = 'center' }: Props) {
  return (
    <p className={`biz-tagline${align === 'left' ? ' biz-tagline-left' : ''}`}>
      <span className="biz-tagline-lead">Built to be</span>
      <TextLoop className="biz-tagline-loop" interval={2.5}>
        {traits.map((word) => (
          <span key={word} className="biz-tagline-word">
            {word}
          </span>
        ))}
      </TextLoop>
    </p>
  )
}
