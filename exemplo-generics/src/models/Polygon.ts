export default abstract class Polygon {
  abstract area(): number

  abstract perimeter(): number

  // Polygon.sumAreas(sqr1, sqr2, tri1, tri2)
  // spread operator
  static sumAreas(...polygons: Polygon[]): number {
    let sum = 0
    polygons.forEach((p) => (sum += p.area()))
    return sum
  }

  static sumPerimeters(...polygons: Polygon[]): number {
    // Reduce (redução) OU map/reduce
    return polygons.reduce((sum, element) => sum + element.perimeter(), 0)
  }
}
