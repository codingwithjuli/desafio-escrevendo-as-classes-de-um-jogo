class hero{
constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo 
}
atacar() {
    let ataque 
    if (this.tipo === 'mago') {
        this.ataque = 'magia'
    } else if (this.tipo === 'guerreiro') {
        this.ataque = 'espada'
    } else if (this.tipo === 'monge') {
        this.ataque = 'artes marciais'
    } else if (this.tipo === 'ninja') {
        this.ataque = 'shuriken'
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}!`)
}
}

let hero0 = new hero('Merlin', 573, 'mago')
let hero1 = new hero('Shifu', 498, 'ninja')
let hero2 = new hero('Mulan', 19, 'guerreiro')

hero0.atacar()
hero1.atacar()
hero2.atacar()