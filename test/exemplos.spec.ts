import { Ativo, Passivo, somar } from "../src/ativo_passivo";
import dinheiro from "../src/dinheiro";

test("Exemplo 1", () => {
    // João decidiu abrir uma empresa.
    // Então, ele investiu R$ 20.000 para comprar matéria prima.
    // No primeiro mês de operação, utilizou R$ 5.000 da matéria prima comprada e teve um faturamento
    // de R$ 25.000 e tem R$ 10.000 de custos a pagar em salários em impostos.

    const ativo: Ativo[] = [
        new Ativo("Matéria prima", dinheiro("BRL", 15_000_00)),
        new Ativo("Faturamento", dinheiro("BRL", 25_000_00)),
    ];

    const passivo: Passivo[] = [
        new Passivo("Custos", dinheiro("BRL", 10_000_00)),
    ];

    // O patrimônio líquido é um tipo de passivo porque deve ser devolvido aos donos
    const patrimonioLiquido: Passivo[] = [
        // O capital social faz parte do patrimônio líquido.
        // Quando João decidiu abrir sua empresa, ele fez um investimento inicial de R$ 20.000.
        // Isso compõe o capital social da empresa, e a empresa deve esse dinheiro ao dono.
        // Se a empresa possui uma dívida com o dono, logo, a empresa tem R$ 20.000 de passivo.
        new Passivo("Capital social", dinheiro("BRL", 20_000_00)),

        // E o lucro (ou prejuízo) acumulado, é simplesmente a diferença entre o ativo e o passivo,
        // e também deixa a equação equilibrada.
        new Passivo("Lucros acumulados", dinheiro("BRL", 10_000_00)),
    ];

    const ladoEsquerdoDaEquacao = somar(ativo);
    const ladoDireitoDaEquacao = somar(passivo).adicionar(
        somar(patrimonioLiquido)
    );
    expect(ladoEsquerdoDaEquacao.igualA(ladoDireitoDaEquacao)).toBe(true);
});

test("Exemplo 2", () => {
    // Você possui um computador que vale atualmente em torno de R$ 5.000 se você vendesse hoje.
    // O computador lhe custou R$ 7.500 pois você comprou parcelado, e você já pagou um total de
    // R$ 4.000 das parcelas. Além disso, você tem mais R$ 2.000 na conta bancária e R$ 1.500 de
    // contas a pagar.

    const ativo: Ativo[] = [
        new Ativo("Computador", dinheiro("BRL", 5_000_00)),
        new Ativo("Dinheiro na conta bancária", dinheiro("BRL", 2_000_00)),
    ];

    const passivo: Passivo[] = [
        new Passivo(
            "Parcelas pendentes do computador",
            dinheiro("BRL", 3_500_00)
        ),
        new Passivo("Contas a pagar", dinheiro("BRL", 1_500_00)),
    ];

    // No caso da pessoa física, o patrimônio líquido é quanto vale tudo o que você tem
    // menos suas dívidas
    const patrimonioLiquido: Passivo[] = [
        new Passivo("O que você realmente tem", dinheiro("BRL", 2_000_00)),
    ];

    const ladoEsquerdoDaEquacao = somar(ativo);
    const ladoDireitoDaEquacao = somar(passivo).adicionar(
        somar(patrimonioLiquido)
    );
    expect(ladoEsquerdoDaEquacao.igualA(ladoDireitoDaEquacao)).toBe(true);
});
