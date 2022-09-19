import type { Dinheiro } from "./dinheiro";
import dinheiro from "./dinheiro";

export abstract class CoisaPrecificavel {
    constructor(private _nome: string, private _valor: Dinheiro) {}

    get nome() {
        return this._nome;
    }

    get valor() {
        return this._valor;
    }
}

export class Ativo extends CoisaPrecificavel {
    constructor(nome: string, valor: Dinheiro) {
        super(nome, valor);
    }
}

export class Passivo extends CoisaPrecificavel {
    constructor(nome: string, valor: Dinheiro) {
        super(nome, valor);
    }
}

export function somar(itens: CoisaPrecificavel[]) {
    return itens.reduce((total, item) => {
        return total.adicionar(item.valor);
    }, dinheiro("BRL", 0));
}
