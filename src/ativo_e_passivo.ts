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
    Tangivel,
    Intangivel,
}

export enum Liquidez {
    Circulante,
    NaoCirculante,
}

export enum CirculanteFinanceiroOuOperacional {
    Financeiro,
    Operacional,
}
