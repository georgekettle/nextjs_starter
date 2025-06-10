export default function Heading({
  title,
  description,
}) {
  return (
    <div className="mb-8 space-y-0.5">
      <h2 className="text-xl font-medium tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  )
}