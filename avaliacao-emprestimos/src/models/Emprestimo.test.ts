import TipoCliente from '../enums/TipoCliente'
import Emprestimo from './Emprestimo'

describe('Testes de empréstimos para clientes do tipo Standard', () => {
  test('Deve permitir um empréstimo dentro das condições favoráveis aos clientes do tipo Standard', () => {
    const emprestimo = new Emprestimo(TipoCliente.STANDARD, 2000, 12)
    expect(emprestimo.simularValorReal()).toBe(2600)
    const prestacao = emprestimo.simularValorPrestacao()
    expect(prestacao.toFixed(2)).toBe('216.67')
  })

  test('Não deve permitir um empréstimo fora das condições favoráveis aos clientes do tipo Standard', () => {
    const emprestimo = new Emprestimo(TipoCliente.STANDARD, 2000, 24)
    expect(emprestimo.simularValorReal()).toBe(0)
    const prestacao = emprestimo.simularValorPrestacao()
    expect(prestacao).toBe(0)
  })
})

describe('Testes de empréstimos para clientes do tipo Platinum', () => {
  test('Deve permitir um empréstimo dentro das condições favoráveis aos clientes do tipo Platinum', () => {
    const emprestimo = new Emprestimo(TipoCliente.PLATINUM, 30000, 24)
    expect(emprestimo.simularValorReal()).toBe(44328)
    const prestacao = emprestimo.simularValorPrestacao()
    expect(prestacao).toBe(1847)
  })

  test('Não deve permitir um empréstimo fora das condições favoráveis aos clientes do tipo Platinum', () => {
    const emprestimo = new Emprestimo(TipoCliente.PLATINUM, 30000, 25)
    expect(emprestimo.simularValorReal()).toBe(0)
    const prestacao = emprestimo.simularValorPrestacao()
    expect(prestacao).toBe(0)
  })
})
