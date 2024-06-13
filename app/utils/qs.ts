// type ParsedQuery = {
//   [key: string]: string | string[]
// }

export const qsParse = (qs: string) => {
  const params = new URLSearchParams(qs)
  return Object.fromEntries(params.entries())
}
