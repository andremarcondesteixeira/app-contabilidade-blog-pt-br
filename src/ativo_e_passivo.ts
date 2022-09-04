import type { Dinheiro } from "./dinheiro";

export type CoisaComValorMonetario = {
    nome: string;
    valor: Dinheiro;
};

export type Ativo = CoisaComValorMonetario;

export type Passivo = CoisaComValorMonetario;
