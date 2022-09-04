export type CodigoMoeda = "BRL" | "USD";

export class Moeda {
    constructor(
        private _codigoIso: CodigoMoeda,
        private _casasDecimais: number
    ) {}

    get codigoIso() {
        return this._codigoIso;
    }

    get casasDecimais() {
        return this._casasDecimais;
    }
}

export const Moedas = Object.freeze({
    BRL: new Moeda("BRL", 2),
    USD: new Moeda("USD", 2),
});

export class Dinheiro {
    constructor(private _valorEmCentavos: number, private _moeda: Moeda) {}

    private checarMoeda(d: Dinheiro) {
        if (this._moeda !== d._moeda) {
            throw new TypeError("Tentativa de operação com moedas diferentes");
        }
    }

    mais(d: Dinheiro) {
        this.checarMoeda(d);
        return new Dinheiro(
            this._valorEmCentavos + d._valorEmCentavos,
            this._moeda
        );
    }

    menos(d: Dinheiro) {
        this.checarMoeda(d);
        return new Dinheiro(
            this._valorEmCentavos - d._valorEmCentavos,
            this._moeda
        );
    }

    vezes(fator: number) {
        return new Dinheiro(this._valorEmCentavos * fator, this._moeda);
    }

    divididoPor(fator: number) {
        return new Dinheiro(this._valorEmCentavos / fator, this._moeda);
    }

    formatar(linguagem: string) {
        return new Intl.NumberFormat(linguagem, {
            style: "currency",
            currency: this._moeda.codigoIso,
        }).format(
            this._valorEmCentavos / Math.pow(10, this._moeda.casasDecimais)
        );
    }
}

export default function dinheiro(valorEmCentavos: number, moeda: CodigoMoeda) {
    return new Dinheiro(valorEmCentavos, Moedas[moeda]);
}
