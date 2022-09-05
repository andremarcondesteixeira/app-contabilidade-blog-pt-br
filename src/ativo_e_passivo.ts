import type { Dinheiro } from "./dinheiro";

export abstract class CoisaComValorMonetario {
    constructor(protected _nome: string, protected _valor: Dinheiro) {}

    get nome() {
        return this._nome;
    }

    get valor() {
        return this._valor;
    }
}

export class Ativo extends CoisaComValorMonetario {
    private _liquidez: Liquidez;
    private _tangibilidade: Tangibilidade;

    constructor({
        nome,
        valor,
        liquidez,
        tangibilidade,
    }: {
        nome: string;
        valor: Dinheiro;
        liquidez: Liquidez;
        tangibilidade: Tangibilidade;
    }) {
        super(nome, valor);
        this._liquidez = liquidez;
        this._tangibilidade = tangibilidade;
    }

    get liquidez() {
        return this._liquidez;
    }

    get tangibilidade() {
        return this._tangibilidade;
    }
}

export class Passivo extends CoisaComValorMonetario {
    private _liquidez: CirculanteFinanceiroOuOperacional | Liquidez.NaoCirculante;

    constructor({
        nome,
        valor,
        liquidez,
    }: {
        nome: string;
        valor: Dinheiro;
        liquidez: CirculanteFinanceiroOuOperacional | Liquidez.NaoCirculante;
    }) {
        super(nome, valor);
        this._liquidez = liquidez;
    }

    get liquidez() {
        return this._liquidez;
    }
}

export enum Tangibilidade {
    Tangivel = "Tangível",
    Intangivel = "Intangível",
}

export enum Liquidez {
    Circulante = "Circulante",
    NaoCirculante = "Não Circulante",
}

export enum CirculanteFinanceiroOuOperacional {
    Financeiro = "Circulante Financeiro",
    Operacional = "Circulante Operacional",
}
