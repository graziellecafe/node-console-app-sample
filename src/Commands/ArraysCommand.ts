import { Character } from "../Entities/ClassBased/Character";

class ArrayCommand {

    private readonly VetorNumericoDesordenadoSemRepeticao: Array<number> = [4, 3, 2, 6, 8, 12, 34, 54, 1, 6];
    private readonly VetorNumericoDesordenadoComRepeticao: Array<number> = [5, 3, 2, 6, 3, 12, 3, 6, 1, 6];
    private readonly VetorDeObjetos: Array<Character> = [
        new Character({
            UserId: 4,
            Name: 'Maedhros'
        }),
        new Character({
            UserId: 2,
            Name: 'Thingol'
        }),
        new Character({
            UserId: 5,
            Name: 'Glorfindel'
        }),
        new Character({
            UserId: 1,
            Name: 'Feanor'
        }),
        new Character({
            UserId: 3,
            Name: 'Eol'
        })
    ];

    constructor() { }

    /* Criar um método para encontrar um determinado elemento no array, retornar 'true' caso encontre ou 'false' caso não encontre;
    Não pode usar o metodo array.find() */
    public EncontrarUmElementoArraySemRepeticao(chave: number): boolean {

        console.log();
        console.log('EncontrarUmElemento - Array desordenado sem repetir elemento');
        for (let i = 0; i < this.VetorNumericoDesordenadoSemRepeticao.length; i++) {
            if (this.VetorNumericoDesordenadoSemRepeticao[i] === chave) {
                return true;
            }
        }

        return false;
    }

    /* Criar um método para criar um array com elementos distindos a partir de um array com elementos repetidos
    Não pode usar o método array.filter()*/
    public CriarArrayElementosDistintos() {

        console.log();
        console.log('CriarArrayElementosDistintos - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);

        const arrayResultante: Array<number> = [];
        for (let i = 0; i < this.VetorNumericoDesordenadoComRepeticao.length; i++) {
            if (!arrayResultante.find(elemento => elemento === this.VetorNumericoDesordenadoComRepeticao[i])) {
                arrayResultante.push(this.VetorNumericoDesordenadoComRepeticao[i]);
            }
        }

        console.log(`Vetor resultante: ${arrayResultante}`);
    }

    /*Criar um método para encontrar o elemento com o maior valor em um array numérico
    Não pode usar o método Math.max()*/
    public EncontrarMaiorValor() {

        console.log();
        console.log('EncontrarMaiorValor - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);
        let maiorVAlor = Number.MIN_VALUE;

        for (let valor of this.VetorNumericoDesordenadoComRepeticao) {
            if (valor > maiorVAlor) {
                maiorVAlor = valor;
            }
        }

        console.log(`Maior valor: ${maiorVAlor}`);
    }

    /*Criar um método para encontrar o elemento com o menor valor em um array numérico
    Não pode usar o método Math.max()*/
    public EncontrarMenorValor() {

        console.log();
        console.log('EncontrarMenorValor - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);
        let menorValor = Number.MAX_VALUE;

        for (let valor of this.VetorNumericoDesordenadoComRepeticao) {
            if (valor < menorValor) {
                menorValor = valor;
            }
        }

        console.log(`Menor valor: ${menorValor}`);
    }

    /*Criar um método para ordenar um array numérico em ordem crescente SelectionSort (Troca os elementos baseado na posicao)
    Não pode usar metodos array.sort()*/
    public OrdenarArrayNumerico() {

        console.log();
        console.log('OrdenarArrayNumerico - Array desordenado com repetição de elemento');
        console.log(`Vetor original: ${this.VetorNumericoDesordenadoComRepeticao}`);
        let PosicaoMenor = 0, valorTemp = 0;

        for (let i = 0; i < this.VetorNumericoDesordenadoComRepeticao.length; i++) {
            PosicaoMenor = i;
            for (let j = i; j < this.VetorNumericoDesordenadoComRepeticao.length; j++) {
                if (this.VetorNumericoDesordenadoComRepeticao[j] < this.VetorNumericoDesordenadoComRepeticao[PosicaoMenor]) {
                    PosicaoMenor = j;
                }
            }

            valorTemp = this.VetorNumericoDesordenadoComRepeticao[i];
            this.VetorNumericoDesordenadoComRepeticao[i] = this.VetorNumericoDesordenadoComRepeticao[PosicaoMenor];
            this.VetorNumericoDesordenadoComRepeticao[PosicaoMenor] = valorTemp;
        }

        console.log(`Vetor ordenado: ${this.VetorNumericoDesordenadoComRepeticao}`);
        this.shuffleArray<number>(this.VetorNumericoDesordenadoComRepeticao);
    }

    /*Criar um método para ordenar um array de objetos em ordem crescente SelectionSort (Troca os elementos baseado na posicao)
    Não pode usar metodos array.sort()*/
    public OrdenarArrayDeObjetos() {

        console.log();
        console.log('OrdenarArrayDeObjetos - Array desordenado sem repetição de elemento');
        console.log('Vetor original:', this.VetorDeObjetos);
        let PosicaoMenor = 0, valorTemp: Character;
        const tempArray = this.VetorDeObjetos

        for (let i = 0; i < this.VetorDeObjetos.length; i++) {
            PosicaoMenor = i;
            for (let j = i; j < this.VetorDeObjetos.length; j++) {
                if (this.VetorDeObjetos[j].UserId < this.VetorDeObjetos[PosicaoMenor].UserId) {
                    PosicaoMenor = j;
                }
            }

            valorTemp = this.VetorDeObjetos[i];
            this.VetorDeObjetos[i] = this.VetorDeObjetos[PosicaoMenor];
            this.VetorDeObjetos[PosicaoMenor] = valorTemp;
        }

        console.log('Vetor ordenado:', this.VetorDeObjetos);
        this.shuffleArray<Character>(this.VetorDeObjetos);
    }

    private shuffleArray<T>(array: Array<T>): void {

        const arrayLenght = array.length;
        let positionA: number, positionB: number, acum: T;

        for (let i = 0; i < arrayLenght; i++) {
            positionA = Math.round(Math.random() * arrayLenght);
            positionB = Math.round(Math.random() * arrayLenght);
            acum = array[positionA];
            array[positionA] = array[positionB];
            array[positionB] = acum;
        }
    }
}

export { ArrayCommand };