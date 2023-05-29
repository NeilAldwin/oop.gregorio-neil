function sort(array: number[]): void {
  const even = []
  const odd = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i])
    } else {
      odd.push(array[i])
    }
  }
  console.log('Odd output: ', odd)
  console.log('Even output: ', even)
}
sort([10, 1, 2, 2, 5])
