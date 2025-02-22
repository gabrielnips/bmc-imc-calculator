"use client";

import { useState, useMemo } from "react";
import { calcularIMC } from "../hooks/calculateIMC";

export default function BMICalculator() {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");
  const [ageGroup, setAgeGroup] = useState<string>("");

  const imc = useMemo(() => {
    return weight && height ? calcularIMC(weight, height) : null;
  }, [weight, height]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-3">
      <div className="flex flex-col md:flex-row justify-center gap-5 w-full max-w-4xl">
        <form
          className="bg-primary200 w-full max-w-md py-10 px-5 md:px-14 rounded-lg flex flex-col items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-primary600 text-2xl font-medium text-center">
            Calculadora de IMC (BMI)
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-3 mt-4 w-full">
            <div className="mb-4 w-full">
              <label className="block text-sm font-light text-primary600">
                Peso (kg):
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value) || "")}
                required
                min="10"
                max="300"
                step="0.1"
                placeholder="Ex: 72.5"
                className="w-full p-3 border rounded-lg mt-1 bg-primary500 text-primary400 placeholder:text-primary400 outline-primary550"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-light text-primary600">
                Altura (m):
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value) || "")}
                required
                min="0.5"
                max="3"
                step="0.01"
                placeholder="Ex: 1.74"
                className="w-full p-3 border rounded-lg mt-1 bg-primary500 text-primary400 placeholder:text-primary400 outline-primary550"
              />
            </div>
          </div>

          <div className="mb-4 w-full text-center">
            <span className="block text-sm font-light text-primary600">
              Gênero:
            </span>
            <div className="flex justify-center gap-4 mt-2">
              {["Homem", "Mulher"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 text-primary600"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={() => setGender(g)}
                    className="checkbox"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4 w-full text-center">
            <span className="block text-sm font-light text-primary600">
              Faixa etária:
            </span>
            <div className="flex justify-center gap-4 mt-2">
              {["Adulto", "Criança"].map((a) => (
                <label
                  key={a}
                  className="flex items-center gap-2 text-primary600"
                >
                  <input
                    type="radio"
                    name="age"
                    value={a}
                    checked={ageGroup === a}
                    onChange={() => setAgeGroup(a)}
                    className="checkbox"
                  />
                  {a}
                </label>
              ))}
            </div>
          </div>
        </form>

        <div className="max-w-md w-full p-5 bg-primary200 rounded-lg text-center md:text-left">
          <h2 className="text-primary600 text-xl font-medium mb-3">
            Sobre o Estudo e o Site
          </h2>
          <p className="text-primary400 text-sm">
            A fórmula utilizada para calcular o IMC (Índice de Massa Corporal) é
            amplamente reconhecida e baseada em estudos científicos reais, como
            os conduzidos pela Organização Mundial da Saúde e pesquisas
            epidemiológicas. Conhecida como índice de Quetelet, ela divide o
            peso (em kg) pela altura (em metros) ao quadrado (IMC = peso /
            altura²), sendo um indicativo importante dos riscos de saúde, como
            doenças cardiovasculares e diabetes. Para mais detalhes, acesse o
            estudo completo{" "}
            <a
              href="https://www.who.int/publications/i/item/physical-status-the-use-and-interpretation-of-anthropometry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              aqui
            </a>
            .
          </p>
          <p className="text-primary400 text-sm mt-3">
            É importante notar que a fórmula para calcular o IMC é a mesma para
            homens e mulheres, embora a interpretação dos resultados possa
            variar conforme fatores individuais, como composição corporal e
            distribuição de gordura.
          </p>
          <p className="text-primary400 text-sm mt-3">
            Este site é uma ferramenta educativa e não substitui a avaliação
            médica. Consulte um profissional de saúde para orientações
            personalizadas e diagnóstico preciso.
          </p>
        </div>
      </div>

      {imc !== null && (
        <div className="w-full max-w-4xl p-5 bg-primary200 rounded-lg text-center flex gap-5 md:flex-row flex-col">
          <div>
            <h2 className="text-primary600 text-xl font-medium mb-3">
              Resultado:
            </h2>
            <p className="text-primary400 text-medium text-3xl">IMC: {imc}</p>
            <p className="text-primary400 text-light text-md">
              Peso: {weight}kg
            </p>
            <p className="text-primary400 text-light text-md">
              Altura: {height}m
            </p>
            <p className="text-primary400 text-light text-md">
              Gênero: {gender}
            </p>
            <p className="text-primary400 text-light text-md">
              Faixa Etária: {ageGroup}
            </p>
          </div>

          <div>
            <h2 className="text-primary600 text-xl font-medium mb-3">
              Classificação do IMC:
            </h2>
            <div className="flex gap-2 max-w-[642px] md:flex-row flex-col">
              <p className="text-primary400 text-sm">
                <strong>18,5 ou menos:</strong> Abaixo do normal - Procure um
                médico. Pode ser característica do organismo ou desnutrição.
              </p>
              <p className="text-primary400 text-sm mt-2">
                <strong>Entre 18,6 e 24,9:</strong> Normal - Mantenha um estilo
                de vida ativo e alimentação equilibrada.
              </p>
              <p className="text-primary400 text-sm mt-2">
                <strong>Entre 25,0 e 29,9:</strong> Sobrepeso - Pré-obesidade.
                Pode estar associado a diabetes e hipertensão.
              </p>
              <p className="text-primary400 text-sm mt-2">
                <strong>Entre 30,0 e 34,9:</strong> Obesidade grau I - Sinal de
                alerta. Inicie mudanças e acompanhamento com profissionais.
              </p>
              <p className="text-primary400 text-sm mt-2">
                <strong>Entre 35,0 e 39,9:</strong> Obesidade grau II - Mudanças
                no estilo de vida com acompanhamento profissional são
                essenciais.
              </p>
              <p className="text-primary400 text-sm mt-2">
                <strong>Acima de 40,0:</strong> Obesidade grau III - Risco de
                doenças graves. Tratamento urgente necessário.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
