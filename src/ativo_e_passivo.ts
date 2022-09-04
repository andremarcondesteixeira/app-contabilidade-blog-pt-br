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
    Financeiro,
    Operacional,
}

// exemplo
const exemplosDeAtivos: Ativo[] = [
    {
        nome: "Dinheiro em caixa",
        valor: dinheiro(5_000_00, "BRL"),
        tangibilidade: Tangibilidade.Tangivel,
        liquidez: Liquidez.Circulante,
    },
    {
        nome: "Imóvel",
        valor: dinheiro(500_000_00, "BRL"),
        tangibilidade: Tangibilidade.Tangivel,
        liquidez: Liquidez.NaoCirculante,
    },
    {
        nome: "Saldo em conta bancária",
        valor: dinheiro(50_000_00, "BRL"),
        tangibilidade: Tangibilidade.Intangivel,
        liquidez: Liquidez.Circulante,
    },
    {
        nome: "Marga registrada",
        valor: dinheiro(1_000_000_00, "BRL"),
        tangibilidade: Tangibilidade.Intangivel,
        liquidez: Liquidez.NaoCirculante,
    },
];

const exemplosDePassivos: Passivo[] = [
    {
        nome: "Saldo negativo em conta bancária",
        valor: dinheiro(1000_00, "BRL"),
        liquidez: CirculanteFinanceiroOuOperacional.Financeiro,
    },
    {
        nome: "Salários do mês",
        valor: dinheiro(100_000_00, "BRL"),
        liquidez: CirculanteFinanceiroOuOperacional.Operacional,
    },
    {
        nome: "Empréstimo de longo prazo",
        valor: dinheiro(200_000_00, "BRL"),
        liquidez: Liquidez.NaoCirculante,
    },
];
