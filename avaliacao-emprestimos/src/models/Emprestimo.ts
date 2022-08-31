import TipoCliente from '../enums/TipoCliente'
import CondicoesEmprestimo from './CondicoesEmprestimo'

export default class Emprestimo {
  private _tipoCliente: TipoCliente
  private _valor: number
  private _quantidadePrestacoes: number

  constructor(
    tipoCliente: TipoCliente,
    valor: number,
    quantidadePrestacoes: number
  ) {
    this._tipoCliente = tipoCliente
    this._valor = valor
    this._quantidadePrestacoes = quantidadePrestacoes
  }

  simularValorReal() {
    let condicoes = new CondicoesEmprestimo(this._tipoCliente)

    if (
      this._valor <= condicoes.limite &&
      this._quantidadePrestacoes <= condicoes.quantidadeMaximaPrestacoes &&
      this._quantidadePrestacoes >= 1
    ) {
      let valorReal = condicoes.taxaJuros / 100
      valorReal *= this._quantidadePrestacoes
      valorReal += 1
      valorReal *= this._valor
      return valorReal
    }

    return 0
  }

  simularValorPrestacao() {
    return this.simularValorReal() / this._quantidadePrestacoes
  }
}
