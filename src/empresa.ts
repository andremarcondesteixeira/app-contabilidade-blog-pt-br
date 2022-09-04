import {
    Ativo,
    CirculanteFinanceiroOuOperacional,
    CoisaComValorMonetario,
    Liquidez,
    Passivo,
    Tangibilidade,
} from "./ativo_e_passivo";
import dinheiro, { CodigoMoeda, Moeda, Moedas } from "./dinheiro";

export enum SituacaoPatrimonial {
    Positiva = "Positiva",
    Nula = "Nula",
    Negativa = "Negativa",
}

export class Empresa {
    private moedaPadrao: Moeda;

    constructor(private ativos: Ativo[], private passivos: Passivo[], moedaPadrao: Moeda | CodigoMoeda) {
        this.moedaPadrao = moedaPadrao instanceof Moeda ? moedaPadrao : Moedas[moedaPadrao];
    }

    private somarFatosContabeis(fatos: CoisaComValorMonetario[]) {
        return fatos.reduce((total, ativo) => {
            return total.mais(ativo.valor);
        }, dinheiro(0, this.moedaPadrao));
    }

    get totalAtivos() {
        return this.somarFatosContabeis(this.ativos);
    }

    get totalPassivos() {
        return this.somarFatosContabeis(this.passivos);
    }

    get patrimonioLiquido() {
        const valor = this.totalAtivos.menos(this.totalPassivos);
        const zero = dinheiro(0, valor.moeda.codigoIso);
        let situacaoPatrimonial: SituacaoPatrimonial;

        if (valor.maiorQue(zero)) {
            situacaoPatrimonial = SituacaoPatrimonial.Positiva;
        } else if (valor.igualA(zero)) {
            situacaoPatrimonial = SituacaoPatrimonial.Nula;
        } else {
            situacaoPatrimonial = SituacaoPatrimonial.Negativa;
        }

        return {
            situacaoPatrimonial,
            valor,
        };
    }
}

const empresaComLucro = new Empresa(
    [
        {
            nome: "saldo em conta bancária",
            valor: dinheiro(500_000_00, "BRL"),
            liquidez: Liquidez.Circulante,
            tangibilidade: Tangibilidade.Tangivel,
        },
        {
            nome: "patente registrada",
            valor: dinheiro(1_000_000_00, "BRL"),
            liquidez: Liquidez.NaoCirculante,
            tangibilidade: Tangibilidade.Intangivel,
        },
        {
            nome: "matéria prima",
            valor: dinheiro(200_000_00, "BRL"),
            liquidez: Liquidez.Circulante,
            tangibilidade: Tangibilidade.Tangivel,
        },
    ] as Ativo[],
    [
        {
            nome: "Salários do mês",
            valor: dinheiro(100_000_00, "BRL"),
            liquidez: CirculanteFinanceiroOuOperacional.Operacional,
        },
        {
            nome: "Fornecedores do mês",
            valor: dinheiro(50_000, "BRL"),
            liquidez: CirculanteFinanceiroOuOperacional.Operacional,
        },
    ] as Passivo[],
    "BRL"
);
console.log(empresaComLucro.patrimonioLiquido);
/*
{
    situacaoPatrimonial: Situacao
}
*/
