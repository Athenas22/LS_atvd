class Provas {
    #pesos;
    #gabarito;
    #respostas;

    constructor(gabarito, pesos) {
        this.#gabarito = gabarito;
        this.#pesos = pesos;
        this.#respostas = [];
    }

    adicionar(resolucao) {
        this.#respostas.push(resolucao);
    }

    #corrigir(resolucao) {
        let nota = 0;
        for (let i = 0; i < this.#gabarito.length; i++) {
            if (resolucao[i] === this.#gabarito[i]) {
                nota += this.#pesos[i];
            }
        }
        return nota;
    }

    media() {
        const notas = this.#respostas.map(this.#corrigir.bind(this));
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        return notas.length ? soma / notas.length : 0;
    }

    minimo(qtd = 1) {
        const notas = this.#respostas.map(this.#corrigir.bind(this));
        return notas.sort((a, b) => a - b).slice(0, qtd);
    }

    maximo(qtd = 1) {
        const notas = this.#respostas.map(this.#corrigir.bind(this));
        return notas.sort((a, b) => b - a).slice(0, qtd);
    }

    menoresQue(limite = 0) {
        return this.#respostas.map(this.#corrigir.bind(this)).filter(nota => nota < limite);
    }

    maioresQue(limite = 0) {
        return this.#respostas.map(this.#corrigir.bind(this)).filter(nota => nota > limite);
    }
}

const gabarito = ['a', 'b', 'a', 'c', 'd'];
const pesos = [2, 2, 2, 2, 2];

const sistema = new Provas(gabarito, pesos);

const respostasAluno1 = ['a', 'b', 'b', 'b', 'b'];
sistema.adicionar(respostasAluno1);

const nota = sistema.maioresQue(0)[0];
console.log("Nota do aluno:", nota);
