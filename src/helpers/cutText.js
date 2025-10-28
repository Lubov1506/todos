export const cutText = (string, cutTo=180) =>
  string.length > cutTo ? `${string.slice(0, cutTo)}...` : string
