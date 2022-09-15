import Dinero from "dinero.js";

export class Dinheiro {
    private _objetoEncapsulado: Dinero.Dinero;

    constructor(private _moeda: Moeda, private _valorEmCentavos: number) {
        this._objetoEncapsulado = Dinero({
            amount: this._valorEmCentavos,
            currency: this._moeda,
        });
    }

    get moeda(): Moeda {
        return this._moeda;
    }

    adicionar(other: Dinheiro) {
        return this.construirAPartirDoObjetoEncapulado(this._objetoEncapsulado.add(other._objetoEncapsulado));
    }

    subtrair(other: Dinheiro) {
        return this.construirAPartirDoObjetoEncapulado(this._objetoEncapsulado.subtract(other._objetoEncapsulado));
    }

    multiplicar(factor: number) {
        return this.construirAPartirDoObjetoEncapulado(this._objetoEncapsulado.multiply(factor));
    }

    dividir(factor: number) {
        return this.construirAPartirDoObjetoEncapulado(this._objetoEncapsulado.divide(factor));
    }

    menorQue(other: Dinheiro) {
        return this._objetoEncapsulado.lessThan(other._objetoEncapsulado);
    }

    menorOuIgualA(other: Dinheiro) {
        return this._objetoEncapsulado.lessThanOrEqual(other._objetoEncapsulado);
    }

    igualA(other: Dinheiro) {
        return this._objetoEncapsulado.equalsTo(other._objetoEncapsulado);
    }

    maiorOuIgualA(other: Dinheiro) {
        return this._objetoEncapsulado.greaterThanOrEqual(other._objetoEncapsulado);
    }

    maiorQue(other: Dinheiro) {
        return this._objetoEncapsulado.greaterThan(other._objetoEncapsulado);
    }

    formatar(linguagem: string) {
        return new Intl.NumberFormat(linguagem, {
            style: "currency",
            currency: this._moeda,
            // por enquanto, ignoramos o fato de outras moedas terem divisões diferentes
            // de centavos para simplificar o código
        }).format(this._valorEmCentavos / 100);
    }

    private construirAPartirDoObjetoEncapulado(obj: Dinero.Dinero) {
        return new Dinheiro(obj.getCurrency(), obj.getAmount());
    }
}

export type Moeda = Dinero.Currency;

export default function dinheiro(moeda: Moeda, valorEmCentavos: number) {
    return new Dinheiro(moeda, valorEmCentavos);
}
