//Problem Set No. 11

class Shape {
  public length = 0
  public width = 0
  public height = 0

  constructor(length: number, width: number, height: number) {
    this.length = length
    this.width = width
    this.height = height
  }
  
}

class Square extends Shape {
  constructor(length: number, width: number, height: number) {
    super(length, width, height)
  }
  getArea(): number {
    return this.length * this.width
  }
  getPerimeter(): number {
    return 4 * this.length || this.width || this.height
  }
  getVolume(): number {
    return this.length * this.width * this.height
  }
}

class Rectangle extends Shape {
  constructor(length: number, width: number, height: number) {
    super(length, width, height)
  }
  getArea(): number {
    return this.length * this.width
  }
  getVolume(): number {
    return this.length * this.width * this.height
  }
  getPerimeter(): number {
    return 2 * (this.length) + 2 * (this.width)
  }
}

const square = new Square (8, 1, 3)
const rectangle = new Rectangle (1, 4, 3)


console.log(`Area:`, square.getArea())
console.log(`Perimeter:`, square.getPerimeter())
console.log(`Volume:`, square.getVolume(),`\n`)


console.log(`Area:`, rectangle.getArea())
console.log(`Perimeter:`, rectangle.getPerimeter())
console.log(`Volume:`, rectangle.getVolume())