export default class MyModel {
  static myNumber: number = 1
  name: string

  constructor() {
    this.name = ''
  }

  sayHello() {
    console.log(`Olá, ${this.name}!`)
    console.log(`Esta é a chamada de número ${MyModel.myNumber++}`)
  }
}
