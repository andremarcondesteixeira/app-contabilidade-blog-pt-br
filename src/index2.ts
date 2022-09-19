import { Ativo, Passivo, somar } from "./ativo_passivo";
import dinheiro from "./dinheiro";

const ativo: Ativo[] = [
    new Ativo("Computador", dinheiro("BRL", 5_000_00)),
    new Ativo("Dinheiro na conta bancária", dinheiro("BRL", 2_000_00)),
];

const passivo: Passivo[] = [
    new Passivo("Parcelas pendentes do computador", dinheiro("BRL", 3_500_00)),
    new Passivo("Contas a pagar", dinheiro("BRL", 1_500_00)),
];

// No caso da pessoa física, o patrimônio líquido é quanto vale tudo o que você tem
// menos suas dívidas
const patrimonioLiquido: Passivo[] = [new Passivo("O que você realmente tem", dinheiro("BRL", 2_000_00))];

const ladoEsquerdoDaEquacao = somar(ativo);
const ladoDireitoDaEquacao = somar(passivo).adicionar(somar(patrimonioLiquido));
expect(ladoEsquerdoDaEquacao.igualA(ladoDireitoDaEquacao)).toBe(true);
