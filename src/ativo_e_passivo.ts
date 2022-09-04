import type { Dinheiro } from "./dinheiro";

export type Ativo = CoisaComValorMonetario & {
    circulante_ou_nao_circulante: AtivoCirculanteOuNaoCirculante;
};

export type Passivo = CoisaComValorMonetario & {
    circulante_ou_nao_circulante: PassivoCirculanteOuNaoCirculante;
};

export type CoisaComValorMonetario = {
    nome: string;
    valor: Dinheiro;
    tangibilidade: Tangibilidade;
};

export enum Tangibilidade {
    Tangivel = "tangível",
    Intangivel = "intangível",
}

export enum AtivoCirculanteOuNaoCirculante {
    Circulante = "ativo circulante",
    NaoCirculante = "ativo não circulante",
}

export enum PassivoCirculanteOuNaoCirculante {
    CirculanteOperacional = "passivo circulante operacional",
    CirculanteFinanceiro = "passivo circulante financeiro",
    NaoCirculante = "passivo não circulante",
}
