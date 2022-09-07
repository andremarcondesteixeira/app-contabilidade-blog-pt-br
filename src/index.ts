import {
    Ativo,
    CirculanteFinanceiroOuOperacional,
    CoisaComValorMonetario,
    Liquidez,
    Passivo,
    Tangibilidade,
} from "./ativo_e_passivo";
import { gerarRelatorioDeBalancoPatrimonial } from "./balanco_patrimonial";
import dinheiro from "./dinheiro";

const ativos = [
    new Ativo({
        nome: "saldo em conta bancária",
        valor: dinheiro(500_000_00, "BRL"),
        liquidez: Liquidez.Circulante,
        tangibilidade: Tangibilidade.Tangivel,
    }),
    new Ativo({
        nome: "matéria prima",
        valor: dinheiro(200_000_00, "BRL"),
        liquidez: Liquidez.Circulante,
        tangibilidade: Tangibilidade.Tangivel,
    }),
];
const passivos = [
    new Passivo({
        nome: "Salários do mês",
        valor: dinheiro(100_000_00, "BRL"),
        liquidez: CirculanteFinanceiroOuOperacional.Operacional,
    }),
    new Passivo({
        nome: "Fornecedores do mês",
        valor: dinheiro(50_000, "BRL"),
        liquidez: CirculanteFinanceiroOuOperacional.Operacional,
    }),
];
const capitalSocial = dinheiro(1000_00, "BRL");
const relatorio = gerarRelatorioDeBalancoPatrimonial(ativos, passivos, capitalSocial);

// o trecho a seguir é somente para deixar a saída do console mais legível
const relatorioFormatado = {
    ativos: {
        circulantes: {
            itens: formatar(relatorio.ativos.circulantes.itens),
            total: relatorio.ativos.circulantes.total.formatar("pt-BR"),
        },
        naoCirculantes: {
            itens: formatar(relatorio.ativos.naoCirculantes.itens),
            total: relatorio.ativos.naoCirculantes.total.formatar("pt-BR"),
        },
        total: relatorio.ativos.total.formatar("pt-BR"),
    },
    passivos: {
        circulantes: {
            itens: formatar(relatorio.passivos.circulantes.itens),
            total: relatorio.passivos.circulantes.total.formatar("pt-BR"),
        },
        naoCirculantes: {
            itens: formatar(relatorio.passivos.naoCirculantes.itens),
            total: relatorio.passivos.naoCirculantes.total.formatar("pt-BR"),
        },
        patrimonioLiquido: {
            itens: formatar(relatorio.passivos.patrimonioLiquido.itens),
            total: relatorio.passivos.patrimonioLiquido.total.formatar("pt-BR"),
        },
        total: relatorio.passivos.total.formatar("pt-BR"),
    },
    situacaoPatrimonial: relatorio.situacaoPatrimonial,
};

function formatar(itens: CoisaComValorMonetario[]) {
    return itens.map((item) => ({
        nome: item.nome,
        valor: item.valor.formatar("pt-BR"),
    }));
}

console.log(JSON.stringify(relatorioFormatado, null, 4));

/*
{
    "ativos": {
        "circulantes": {
            "itens": [
                {
                    "nome": "saldo em conta bancária",
                    "valor": "R$ 500.000,00"
                },
                {
                    "nome": "matéria prima",
                    "valor": "R$ 200.000,00"
                }
            ],
            "total": "R$ 700.000,00"
        },
        "naoCirculantes": {
            "itens": [],
            "total": "R$ 0,00"
        },
        "total": "R$ 700.000,00"
    },
    "passivos": {
        "circulantes": {
            "itens": [
                {
                    "nome": "Salários do mês",
                    "valor": "R$ 100.000,00"
                },
                {
                    "nome": "Fornecedores do mês",
                    "valor": "R$ 500,00"
                }
            ],
            "total": "R$ 100.500,00"
        },
        "naoCirculantes": {
            "itens": [],
            "total": "R$ 0,00"
        },
        "patrimonioLiquido": {
            "itens": [
                {
                    "nome": "Capital social",
                    "valor": "R$ 1.000,00"
                },
                {
                    "nome": "Lucro acumulado",
                    "valor": "R$ 598.500,00"
                }
            ],
            "total": "R$ 599.500,00"
        },
        "total": "R$ 700.000,00"
    },
    "situacaoPatrimonial": "Positiva"
}
*/
