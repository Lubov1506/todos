export const highlightText = (text, query) => {
  if (!query) return text

  const regex = new RegExp(`(${query})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className='bg-teal-200'>
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}
