type AllowedTypes = string | number | Date

export default class MyGenericClass<T extends AllowedTypes> {
  message: T // tipo genérico

  constructor(message: T) {
    this.message = message
  }

  sayMessage() {
    if (typeof this.message == 'string') {
      console.log(this.message)
    } else if (typeof this.message == 'number') {
      console.log(`O seu número é ${this.message}`)
    } else {
      console.log(`A data secreta é ${this.message.toLocaleDateString()}`)
    }
  }
}
