type PlaceholderPanelProps = {
  title: string
  text: string
}

export function PlaceholderPanel({ title, text }: PlaceholderPanelProps) {
  return (
    <div className="placeholder">
      <h2 className="placeholder__title">{title}</h2>
      <p className="placeholder__text">{text}</p>
    </div>
  )
}
