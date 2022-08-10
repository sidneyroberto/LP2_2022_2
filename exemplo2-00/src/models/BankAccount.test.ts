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
})
