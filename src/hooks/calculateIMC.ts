// Função que calcula o IMC usando a fórmula clássica:
// IMC = peso (kg) / (altura (m)²)
// Essa fórmula, conhecida como índice de Quetelet, é amplamente validada
// por estudos científicos e utilizada pela Organização Mundial da Saúde.

export const calcularIMC = (peso: number, altura: number): number | null => {
  if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) return null;
  return parseFloat((peso / (altura * altura)).toFixed(2));
};

/*
export const calcularIMC = (peso: string, altura: string): string => {
  const p = parseFloat(peso);
  const h = parseFloat(altura);
  if (h === 0) return "0";
  const imc = p / (h * h);
  return imc.toFixed(2);
};
*/
