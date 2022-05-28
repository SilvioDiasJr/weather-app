export function formatDate(value: number) {
  const date = new Date(value * 1000)

  const dateFormatted = date.toLocaleDateString('pt-br', { dateStyle: 'full' })

  const arrayDate = String(dateFormatted).split(' ')

  return `${arrayDate[0].slice(0, 3)}. ${arrayDate[1]} ${arrayDate[3].slice(
    0,
    3
  )}`
}
