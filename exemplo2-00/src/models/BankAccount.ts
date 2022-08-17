export default class BankAccount {
  private _balance: number
  private _number: string
  private _branch: string

  constructor() {
    this._balance = 0
    this._branch = '0000-0'
    this._number = '00000-0'
  }

  deposit(value: number) {
    if (value > 0) {
      this._balance += value
    } else {
      console.log('Value must be positive')
    }
  }

  withdraw(value: number) {
    if (value <= this._balance) {
      this._balance -= value
    } else {
      console.log('Value must be equal or lower than balance')
    }
  }

  get balance() {
    return this._balance
  }

  getAccountInfo() {
    return `Number: ${this._number}\nBranch: ${this._branch}`
  }

  set number(number: string) {
    if (/^\d{5}-\d{1}$/.test(number)) {
      this._number = number
    } else {
      console.log('Invalid number')
    }
  }

  set branch(branch: string) {
    if (/^\d{4}-\d{1}$/.test(branch)) {
      this._branch = branch
    } else {
      console.log('Invalid branch')
    }
  }
}
