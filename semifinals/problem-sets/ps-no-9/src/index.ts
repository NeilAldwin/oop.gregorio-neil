//Problem Set No. 9

class Rectangle {
  length: number
  width: number
  height: number

  constructor(length: number, width: number, height: number) {
    this.length = length
    this.width = width
    this.height = height
  }
  getPerimeter(): number {
    return 2 * (this.length + this.width)
  }
  getArea(): number {
    return this.width * this.length
  }
  getVolume(): number {
    return this.length * this.width * this.height
  }
}

const rectangle = new Rectangle(14, 32, 23)

console.log(`Perimeter:`, rectangle.getPerimeter())
console.log(`Area:`, rectangle.getArea())
console.log(`Volume:`, rectangle.getVolume())
