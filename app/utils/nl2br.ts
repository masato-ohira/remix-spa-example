export const nl2br = (str: string) => {
  try {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
  } catch (error) {
    return str
  }
}
