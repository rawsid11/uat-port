export function OrnamentalDivider({ symbol = "✦" }: { symbol?: string }) {
  return <div className="ornamental-divider text-muted-foreground text-sm">{symbol}</div>
}
