import { Ativo, Passivo, somar } from "./ativo_passivo";
import dinheiro from "./dinheiro";

const ativo: Ativo[] = [
    new Ativo("Matéria prima", dinheiro("BRL", 15_000_00)),
    new Ativo("Faturamento", dinheiro("BRL", 25_000_00)),
];

const passivo: Passivo[] = [new Passivo("Custos", dinheiro("BRL", 10_000_00))];

// O capital social faz parte do patrimônio líquido
const patrimonioLiquido: Passivo[] = [
    new Passivo("Capital social", dinheiro("BRL", 20_000_00)),
    new Passivo("Lucros acumulados", dinheiro("BRL", 10_000_00)),
];

const totalAtivos = somar(ativo);
const totalPassivos = somar(passivo);
const totalPL = somar(patrimonioLiquido);
expect(totalAtivos.igualA(totalPassivos.adicionar(totalPL))).toBe(true);
