import type { Dinheiro } from "./dinheiro";
import dinheiro from "./dinheiro";

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
    CirculanteFinanceiro,
    CirculanteOperacional,
}

export const Tangivel = Tangibilidade.Tangivel;
export const Intangivel = Tangibilidade.Intangivel;
export const Circulante = Liquidez.Circulante;
export const CirculanteFinanceiro =
    CirculanteFinanceiroOuOperacional.CirculanteFinanceiro;
export const CirculanteOperacional =
    CirculanteFinanceiroOuOperacional.CirculanteOperacional;
export const NaoCirculante = Liquidez.NaoCirculante;

// exemplo
const meusAtivos: Ativo[] = [
    {
        nome: "Dinheiro em caixa",
        valor: dinheiro(5_000_00, "BRL"),
        tangibilidade: Tangivel,
        liquidez: Circulante,
    },
    {
        nome: "Imóvel",
        valor: dinheiro(500_000_00, "BRL"),
        tangibilidade: Tangivel,
        liquidez: NaoCirculante,
    },
    {
        nome: "Saldo em conta bancária",
        valor: dinheiro(50_000_00, "BRL"),
        tangibilidade: Intangivel,
        liquidez: Circulante,
    },
    {
        nome: "Marga registrada",
        valor: dinheiro(1_000_000_00, "BRL"),
        tangibilidade: Intangivel,
        liquidez: NaoCirculante,
    },
];

const meusPassivos: Passivo[] = [
    {
        nome: "Saldo negativo em conta bancária",
        valor: dinheiro(1000_00, "BRL"),
        liquidez: CirculanteFinanceiro,
    },
    {
        nome: "Salários do mês",
        valor: dinheiro(100_000_00, "BRL"),
        liquidez: CirculanteOperacional,
    },
    {
        nome: "Empréstimo de longo prazo",
        valor: dinheiro(200_000_00, "BRL"),
        liquidez: NaoCirculante,
    },
];
