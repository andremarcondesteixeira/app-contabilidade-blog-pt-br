import type { Dinheiro } from "./dinheiro";

export type CoisaComValorMonetario = {
    nome: string;
    valor: Dinheiro;
};

export type Ativo = CoisaComValorMonetario & {
    liquidez: Liquidez;
    tangibilidade: Tangibilidade;
};

export type Passivo = CoisaComValorMonetario & {
    liquidez: CirculanteFinanceiroOuOperacional | Liquidez.NaoCirculante;
};

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
