import Polygon from './Polygon'

export default class EquilateralTriangle extends Polygon {
  size: number

  constructor(size: number) {
    super()
    this.size = size
  }

  area(): number {
    return (Math.pow(this.size, 2) * Math.sqrt(3)) / 4
  }

  perimeter(): number {
    return this.size * 3
  }
}
