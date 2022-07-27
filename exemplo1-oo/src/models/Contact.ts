export default class Contact {
  name: string
  phone: string
  email: string

  constructor(name: string, phone: string, email: string) {
    this.name = name.length >= 5 ? name : ''
    const regex = /^\(\d{2}\).\d{5}-\d{4}$/
    const validator = new RegExp(regex)
    this.phone = validator.test(phone) ? phone : ''
    this.email = email
  }
}
