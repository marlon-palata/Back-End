/*******************************************************
 AVALIAÇÃO – PROGRAMAÇÃO ORIENTADA A OBJETOS (JavaScript)

 Conteúdos:
 - Classes
 - Atributos
 - Métodos
 - Herança
 - Polimorfismo
 - Encapsulamento
*******************************************************/


/* =====================================================
 EXERCÍCIO 1 – CLASSE SIMPLES (Pessoa)

 Enunciado:
 Crie uma classe chamada Pessoa que possua:
 - nome
 - idade

 Crie um método apresentar() que exiba no console
 o nome e a idade da pessoa.
===================================================== */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

const pessoa1 = new Pessoa("Marlon", 18);
pessoa1.apresentar();


/* =====================================================
 EXERCÍCIO 2 – CLASSE SIMPLES (Produto)

 Enunciado:
 Crie uma classe Produto com:
 - nome
 - preco

 Crie um método mostrarPreco() que exiba
 o nome do produto e seu preço.
===================================================== */

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarPreco() {
        console.log(`Produto: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

const produto1 = new Produto("MacBook", 4500.70);
produto1.mostrarPreco();


/* =====================================================
 EXERCÍCIO 3 – HERANÇA (Funcionário)

 Enunciado:
 Crie uma classe Funcionario com:
 - nome

 Crie uma classe Gerente que herda de Funcionario e
 possui:
 - setor

 Crie um método que exiba o nome e o setor do gerente.
===================================================== */

class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }
}

class Gerente extends Funcionario {
    constructor(nome, setor) {
        super(nome);
        this.setor = setor;
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome} | Setor: ${this.setor}`);
    }
}

const gerente1 = new Gerente("Carlos", "Financeiro");
gerente1.mostrarDados();


/* =====================================================
 EXERCÍCIO 4 – HERANÇA (Veículo)

 Enunciado:
 Crie uma classe Veiculo com:
 - marca

 Crie uma classe Carro que herda de Veiculo e possui:
 - modelo

 Crie um método que exiba a marca e o modelo do carro.
===================================================== */

class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo}`);
    }
}

const carro1 = new Carro("Toyota", "Corolla");
carro1.mostrarInfo();


/* =====================================================
 EXERCÍCIO 5 – ENCAPSULAMENTO (Conta)

 Enunciado:
 Crie uma classe Conta onde:
 - o saldo seja um atributo privado
 - exista um método depositar(valor)
 - exista um método mostrarSaldo()
===================================================== */

class Conta {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    mostrarSaldo() {
        console.log(`Saldo: R$ ${this.#saldo}`);
    }
}

const conta1 = new Conta();
conta1.depositar(150);
conta1.mostrarSaldo();


/* =====================================================
 EXERCÍCIO 6 – ENCAPSULAMENTO (Aluno)

 Enunciado:
 Crie uma classe Aluno onde:
 - a nota seja um atributo privado
 - exista um método definirNota(nota)
 - exista um método mostrarNota()
===================================================== */

class Aluno {
    #nota;

    definirNota(nota) {
        this.#nota = nota;
    }

    mostrarNota() {
        console.log(`Nota do aluno: ${this.#nota}`);
    }
}

const aluno1 = new Aluno();
aluno1.definirNota(8.5);
aluno1.mostrarNota();