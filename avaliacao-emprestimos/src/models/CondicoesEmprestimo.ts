import TipoCliente from '../enums/TipoCliente'

/**
 * TODO transformar em Singleton
 */
export default class CondicoesEmprestimo {
  private _taxaJuros: number
  private _limite: number
  private _quantidadeMaximaPrestacoes: number

  constructor(tipoCliente: TipoCliente) {
    this._definirCondicoes(tipoCliente)
  }

  private _definirCondicoes(tipoCliente: TipoCliente) {
    switch (tipoCliente) {
      case TipoCliente.STANDARD:
        this._limite = 10000
        this._quantidadeMaximaPrestacoes = 12
        this._taxaJuros = 2.5
        break
      case TipoCliente.PLATINUM:
        this._limite = 50000
        this._quantidadeMaximaPrestacoes = 24
        this._taxaJuros = 1.99
        break
      case TipoCliente.GOLD:
        this._limite = 250000
        this._quantidadeMaximaPrestacoes = 48
        this._taxaJuros = 1.2
        break
      default:
        this._limite = 0
        this._quantidadeMaximaPrestacoes = 0
        this._taxaJuros = 0
    }
  }

  get taxaJuros() {
    return this._taxaJuros
  }

  get limite() {
    return this._limite
  }

  get quantidadeMaximaPrestacoes() {
    return this._quantidadeMaximaPrestacoes
  }
}
