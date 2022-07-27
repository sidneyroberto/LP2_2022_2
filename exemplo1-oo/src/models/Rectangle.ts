export default class Rectangle {
  height: number
  basis: number

  constructor(height: number, basis: number) {
    this.basis = basis
    this.height = height
  }

  /**
   * Isto é um método
   */
  calculateArea() {
    return this.height * this.basis
  }

  calculatePerimeter() {
    return 2 * this.basis + 2 * this.height
  }

  isMyAreaBigger(otherRectangle: Rectangle): boolean {
    const area1 = this.calculateArea()
    const area2 = otherRectangle.calculateArea()
    return area1 > area2
  }
}
