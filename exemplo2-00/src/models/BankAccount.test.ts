import BankAccount from './BankAccount'

describe('Tests over the account balance', () => {
  test('It should apply 0 to balance when account is created', () => {
    const account = new BankAccount()
    expect(account.balance).toBe(0)
  })

  test('It should change balance correctly after a sequence of deposits', () => {
    const account = new BankAccount()
    account.deposit(25)
    account.deposit(50)
    account.deposit(100.24)
    expect(account.balance).toBe(175.24)
  })

  test('It should not allow negative deposits', () => {
    const account = new BankAccount()
    account.deposit(-55)
    expect(account.balance).toBe(0)
  })

  test('It should accept a valid withdraw', () => {
    const account = new BankAccount()
    account.deposit(123.45)
    account.withdraw(53.45)
    expect(account.balance).toBe(70)
    account.withdraw(25)
    expect(account.balance).toBe(45)
  })

  test('It should not accept an withdraw when balance is not enough', () => {
    const account = new BankAccount()
    account.withdraw(50)
    expect(account.balance).toBe(0)
    account.deposit(100)
    account.withdraw(300)
    expect(account.balance).toBe(100)
  })
})

describe('Tests over account basic info (number and branch)', () => {
  test('It should create default account and branch numbers when object is instanciated', () => {
    const account = new BankAccount()
    expect(account.getAccountInfo()).toBe('Number: 00000-0\nBranch: 0000-0')
  })

  test('It should correctly display account and branch numbers at account info', () => {
    const account = new BankAccount()
    account.branch = '0123-4'
    account.number = '56789-0'
    expect(account.getAccountInfo()).toBe('Number: 56789-0\nBranch: 0123-4')
  })

  test('It should not display invalid account and branch numbers at account info', () => {
    const account = new BankAccount()
    account.branch = '01234'
    account.number = '567890'
    expect(account.getAccountInfo()).toBe('Number: 00000-0\nBranch: 0000-0')
  })
})
