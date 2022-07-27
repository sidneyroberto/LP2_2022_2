export default class Circle {
  radius: number

  constructor(radius: number) {
    this.radius = radius > 0 ? radius : 1
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius
  }
}
