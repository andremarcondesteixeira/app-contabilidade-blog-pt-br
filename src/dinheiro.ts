import Dinero from "dinero.js";

export class Dinheiro {
    private _objetoEncapsulado: Dinero.Dinero;

    constructor(moeda: Moeda, valorEmCentavos: number) {
        this._objetoEncapsulado = Dinero({
            amount: valorEmCentavos,
            currency: moeda,
        });
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

    private construirAPartirDoObjetoEncapulado(obj: Dinero.Dinero) {
        return new Dinheiro(obj.getCurrency(), obj.getAmount());
    }
}

export type Moeda = Dinero.Currency;
