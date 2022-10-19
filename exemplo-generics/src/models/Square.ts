import IPolygon from './IPolygon'

export default class Square implements IPolygon {
  size: number

  constructor(size: number) {
    this.size = size
  }

  area(): number {
    return this.size * this.size
  }

  perimeter(): number {
    return this.size * 4
  }
}
