export default function randomNumber(min: number = 0, max: number = 10) {
  if (min >= max) {
    return
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}
