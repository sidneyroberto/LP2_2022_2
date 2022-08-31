import TipoCliente from '../enums/TipoCliente'
import CondicoesEmprestimo from './CondicoesEmprestimo'

describe('Testes sobre condições de empréstimo', () => {
  test('Deve definir condições corretas para clientes do tipo Standard', () => {
    const condicoes = new CondicoesEmprestimo(TipoCliente.STANDARD)
    expect(condicoes.taxaJuros).toBe(2.5)
    expect(condicoes.limite).toBe(10000)
    expect(condicoes.quantidadeMaximaPrestacoes).toBe(12)
  })

  test('Deve definir condições corretas para clientes do tipo Platinum', () => {
    const condicoes = new CondicoesEmprestimo(TipoCliente.PLATINUM)
    expect(condicoes.taxaJuros).toBe(1.99)
    expect(condicoes.limite).toBe(50000)
    expect(condicoes.quantidadeMaximaPrestacoes).toBe(24)
  })

  test('Deve definir condições corretas para clientes do tipo Gold', () => {
    const condicoes = new CondicoesEmprestimo(TipoCliente.GOLD)
    expect(condicoes.taxaJuros).toBe(1.2)
    expect(condicoes.limite).toBe(250000)
    expect(condicoes.quantidadeMaximaPrestacoes).toBe(48)
  })
})
