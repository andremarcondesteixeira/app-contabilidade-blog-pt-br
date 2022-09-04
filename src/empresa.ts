import type { Ativo, CoisaComValorMonetario, Passivo } from "./ativo_e_passivo";
import dinheiro from "./dinheiro";

export class Empresa {
    constructor(private ativos: Ativo[], private passivos: Passivo[]) {}

    private somarFatosContabeis(fatos: CoisaComValorMonetario[]) {
        return fatos.reduce((total, ativo) => {
            return total.mais(ativo.valor);
        }, dinheiro(0, "BRL"));
    }

    get valorTotalAtivos() {
        return this.somarFatosContabeis(this.ativos);
    }

    get valorTotalPassivos() {
        return this.somarFatosContabeis(this.passivos);
    }

    get valorPatrimonioLiquido() {
        return this.valorTotalAtivos.menos(this.valorTotalPassivos);
    }
}
