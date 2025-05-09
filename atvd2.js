class Peso {
  constructor(valores) {
    this.valores = valores;
  }
}

class Resposta {
  constructor(respostas) {
    this.respostas = respostas;
  }
}

class Prova {
  constructor(respostaCorreta, peso) {
    this.peso = peso;
    this.respostaCorreta = respostaCorreta;
    this.exames = [];
  }

  adicionar(exame) {
    
    exame.nota = Object.keys(exame.respostas).reduce((total, questao) => {
      return total + (
        exame.respostas[questao] === this.respostaCorreta.respostas[questao] 
        ? this.peso.valores[questao] 
        : 0
      );
    }, 0);

    this.exames.push(exame);
  }

  media() {
    if (this.exames.length === 0) return 0;

    const soma = this.exames.reduce((total, exame) => total + exame.nota, 0);
    return soma / this.exames.length;
  }

  minimo(quantidade = 1) {
    const notas = this.exames.map(exame => exame.nota);
    notas.sort((a, b) => a - b);
    return notas.slice(0, quantidade);
  }

  maximo(quantidade = 1) {
    const notas = this.exames.map(exame => exame.nota);
    notas.sort((a, b) => a - b);
    return notas.slice(-quantidade);
  }

  menoresQue(limite) {
    const notas = this.exames.map(exame => exame.nota);
    return notas.filter(nota => nota < limite).sort((a, b) => a - b);
  }

  maioresQue(limite) {
    const notas = this.exames.map(exame => exame.nota);
    return notas.filter(nota => nota > limite).sort((a, b) => a - b);
  }
}

function executarExemplo() {
 
  const pesos = new Peso({
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 2,
    q5: 2
  });

  const gabarito = new Resposta({
    q1: 'a',
    q2: 'b',
    q3: 'a',
    q4: 'c',
    q5: 'd'
  });

  const prova = new Prova(gabarito, pesos);

  const respostasAluno = {
    q1: 'a',
    q2: 'b',
    q3: 'b',
    q4: 'b',
    q5: 'b'
  };

  prova.adicionar({ respostas: respostasAluno });

  console.log(prova.media()); 
  console.log(prova.minimo());
  console.log(prova.maximo());
  console.log(prova.menoresQue(5));
  console.log(prova.maioresQue(5));
}

