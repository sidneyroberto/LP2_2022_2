export default class Client {
  /**
   * As propriedades dentro de uma classe
   * são chamadas de atributos
   */
  name: string
  cpf: string
  address: string
  phone: string
  email: string

  /**
   * Isto é um construtor. Ele é responsável por inicializar
   * os atributos da classe
   */
  constructor() {
    this.name = ''
    this.cpf = ''
    this.address = ''
    this.phone = ''
    this.email = ''
  }
}
