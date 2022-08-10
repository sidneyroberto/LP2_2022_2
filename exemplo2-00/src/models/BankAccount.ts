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
}
