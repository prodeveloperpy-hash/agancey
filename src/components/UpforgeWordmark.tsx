type Props = {
  className?: string
  /** Accessible name; defaults to Upforge */
  title?: string
  /** Light text for blue / saturated backgrounds */
  variant?: 'default' | 'onPrimary'
}

/** Transparent wordmark: blue “up” + theme-aware “forge” (no white box). */
export default function UpforgeWordmark({ className, title = 'Upforge', variant = 'default' }: Props) {
  const upFill = variant === 'onPrimary' ? '#ffffff' : '#2563eb'
  const forgeClass =
    variant === 'onPrimary' ? 'upforge-wordmark-forge upforge-wordmark-forge-on-primary' : 'upforge-wordmark-forge'

  return (
    <svg
      className={className}
      viewBox="0 0 268 72"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <text
        x="0"
        y="54"
        fontFamily="Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
        fontSize="56"
        fontWeight="800"
        letterSpacing="-2.5"
      >
        <tspan fill={upFill}>up</tspan>
        <tspan className={forgeClass}>forge</tspan>
      </text>
    </svg>
  )
}
