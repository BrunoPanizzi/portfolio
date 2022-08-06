export default function getWindowDimensions() {
  const html = document.querySelector('html')!
  const { width, height } = html.getBoundingClientRect()

  return { width, height }
}
