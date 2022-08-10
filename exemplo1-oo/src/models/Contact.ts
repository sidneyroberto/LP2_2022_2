export default class Contact {
  private _name: string
  private _phone: string
  private _email: string

  constructor() {
    this._name = ''
    this._email = ''
    this._phone = ''
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    if (name.length >= 5) {
      this._name = name
    } else {
      console.log('Invalid name')
    }
  }

  get email() {
    return this._email
  }

  set email(email: string) {
    this._email = email
  }

  get phone() {
    return this._phone
  }

  set phone(phone: string) {
    const regex = /^\(\d{2}\).\d{5}-\d{4}$/
    if (regex.test(phone)) {
      this._phone = phone
    } else {
      console.log('Invalid phone')
    }
  }
}
