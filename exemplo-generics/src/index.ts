import Square from './models/Square'
import EquilateralTriangle from './models/EquilateralTriangle'
import Polygon from './models/Polygon'

const sqr = new Square(12)
console.log('Área: ', sqr.area())
console.log('Perímetro: ', sqr.perimeter())

const tri = new EquilateralTriangle(12)
console.log('Área: ', tri.area())
console.log('Perímetro: ', tri.perimeter())

const sqr2 = new Square(5)
const tri2 = new EquilateralTriangle(5)

console.log('Soma das áreas: ', Polygon.sumAreas(sqr, tri, sqr2, tri2))
console.log(
  'Soma dos perímetros: ',
  Polygon.sumPerimeters(sqr, tri, sqr2, tri2)
)
