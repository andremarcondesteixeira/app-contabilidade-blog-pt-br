import {
    CirculanteFinanceiroOuOperacional,
    Liquidez,
    Tangibilidade,
    type Ativo,
    type Passivo,
} from "./ativo_e_passivo";
import dinheiro from "./dinheiro";
import { gerarRelatorioDeBalancoPatrimonial } from "./balanco_patrimonial";

const relatório = gerarRelatorioDeBalancoPatrimonial(
    [
        {
            nome: "saldo em conta bancária",
            valor: dinheiro(500_000_00, "BRL"),
            liquidez: Liquidez.Circulante,
            tangibilidade: Tangibilidade.Tangivel,
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
    dinheiro(1000_00, "BRL")
);

console.log(JSON.stringify(relatório, null, 4));
