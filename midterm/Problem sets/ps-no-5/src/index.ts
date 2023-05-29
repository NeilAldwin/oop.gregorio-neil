function sort (num: number[]): void{  
  let temp = 0
  for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
      if (num[i] > num[j]) {
        temp = num[i]
        num[i] = num[j]
        num[j] = temp
      }
    }
  }
  console.log('output =>', num)
  }
  sort([55, 1, 3, 2, 10])