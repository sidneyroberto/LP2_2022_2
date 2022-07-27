import Circle from './models/Circle'
import Client from './models/Client'
import Contact from './models/Contact'
import Rectangle from './models/Rectangle'

/**
 * Estou instanciando um novo objeto da classe Client
 * chamado client1
 */
const client1 = new Client()
console.log(client1)
client1.name = 'Sidney Sousa'
client1.cpf = '00000000000'
console.log(client1)

const rect1 = new Rectangle(3, 6)
const area1 = rect1.calculateArea()
console.log(`Área: ${area1}`)
const perimeter1 = rect1.calculatePerimeter()
console.log(`Perimeter: ${perimeter1}`)

const rect2 = new Rectangle(5, 7)
const area2 = rect2.calculateArea()
console.log(`Área: ${area2}`)
const perimeter2 = rect2.calculatePerimeter()
console.log(`Perimeter: ${perimeter2}`)

const isRect1Bigger = rect1.isMyAreaBigger(rect2)
console.log(`Rect1 > Rect2 ? ${isRect1Bigger}`)

const isRect2Bigger = rect2.isMyAreaBigger(rect1)
console.log(`Rect2 > Rect1 ? ${isRect2Bigger}`)

const circle1 = new Circle(0)
console.log(`Área: ${circle1.calculateArea()}`)
console.log(`Perímetro: ${circle1.calculatePerimeter()}`)
console.log(`Raio: ${circle1.radius}`)

const contact1 = new Contact('Sid', '9999-9999', 'sidney@email.com')
console.log(contact1)
contact1.name = 'Sid'
contact1.phone = '99999-9999'
console.log(contact1)
