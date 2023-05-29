class Circle {
  radius: number
 
  height: number

  constructor(radius: number, height: number) {
    this.radius = radius
    this.height = height
  }

  getDiameter(): number {
    return 2 * this.radius
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius
  }
  getVolume(): number {
    return this.radius * this.radius * Math.PI * this.height
  }
}
const circle = new Circle(2, 4)

'console.log(Diameter: ${circle.getDiameter()})'
'console.log(Circumference: ${circle.getCircumference()})'
'console.log(Area: ${circle.getArea()})'
'console.log(Volume: ${circle.getVolume()})'
