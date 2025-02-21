"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [result, setResult] = useState("");

  // Função que calcula o IMC usando a fórmula clássica:
  // IMC = peso (kg) / (altura (m)²)
  // Essa fórmula, conhecida como índice de Quetelet, é amplamente validada
  // por estudos científicos e utilizada pela Organização Mundial da Saúde.
  const calcularIMC = (peso: any, altura: any) => {
    const p = parseFloat(peso);
    const h = parseFloat(altura);
    if (h === 0) return 0;
    const imc = p / (h * h);
    return imc.toFixed(2);
  };

  const resultado = {
    peso: weight,
    altura: height,
    imc: calcularIMC(weight, height),
    genero: gender,
    faixaEtaria: ageGroup,
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-5 ">
      <div className="flex justify-between gap-5">
        <form
          className="bg-primary200 py-10 px-14 rounded-lg flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            setResult(JSON.stringify(resultado));
          }}
        >
          <label className="text-primary600 text-2xl font-medium flex justify-center">
            Calculadora de IMC (BMI)
          </label>
          <div className="flex justify-between gap-3 mt-4 max-w-64">
            <div className="mb-4 pesoDiv">
              <label className="block text-sm font-light text-primary600">
                Peso:
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                min="10"
                max="300"
                step="0.1"
                placeholder="Ex: 72.5 kg"
                className="w-full p-2 border rounded-lg mt-1 bg-primary500 text-primary400 placeholder:text-primary400 outline-primary550 shadow-none"
              />
            </div>

            <div className="mb-4 alturaDiv">
              <label className="block text-sm font-light text-primary600">
                Altura:
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                min="0.5"
                max="3"
                step="0.01"
                placeholder="Ex: 1.74 m"
                className="w-full p-2 border rounded-lg mt-1 bg-primary500 text-primary400 placeholder:text-primary400 outline-primary550 shadow-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-sm font-light text-primary600">
              Gênero:
            </span>
            <label className="inline-flex items-center mr-4 gap-2 font-light text-primary600">
              Homem:
              <input
                type="radio"
                name="gender"
                value="homem"
                checked={gender === "homem"}
                onChange={() => setGender("homem")}
                className="checkbox"
              />
            </label>

            <label className="inline-flex items-center gap-2 font-light text-primary600">
              Mulher:
              <input
                type="radio"
                name="gender"
                value="mulher"
                checked={gender === "mulher"}
                onChange={() => setGender("mulher")}
                className="checkbox"
              />
            </label>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-light text-primary600">
              Faixa etária:
            </span>
            <label className="inline-flex items-center mr-4 gap-2 font-light text-primary600">
              Adulto:
              <input
                type="radio"
                name="age"
                value="adulto"
                checked={ageGroup === "adulto"}
                onChange={() => setAgeGroup("adulto")}
                className="checkbox"
              />
            </label>
            <label className="inline-flex items-center gap-2 font-light text-primary600">
              Criança:
              <input
                type="radio"
                name="age"
                value="crianca"
                checked={ageGroup === "crianca"}
                onChange={() => setAgeGroup("crianca")}
                className="checkbox"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full max-w-52 bg-primary500 text-primary400 py-2 rounded hover:bg-primary550 hover:text-primary450 transition-all"
          >
            Calcular
          </button>
        </form>

        <div className="max-w-md p-5 bg-primary200 rounded-lg">
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
            Nosso site adota essa abordagem validada para oferecer uma
            ferramenta prática e confiável, auxiliando os usuários no
            monitoramento do seu estado nutricional e incentivando escolhas mais
            saudáveis.
          </p>
        </div>
      </div>

      {result && (
        <>
          <div className="max-w-full p-5 bg-primary200 rounded-lg flex gap-5">
            <div className="dadosResultado">
              <h2 className="text-primary600 text-xl font-medium mb-3">
                Resultado:
              </h2>

              <>
                <div className="">
                  <p className="text-primary400 text-medium text-3xl">
                    IMC
                    <br />
                    {JSON.parse(result).imc}
                  </p>
                  <p className="text-primary400 text-light text-lg">
                    Peso: {JSON.parse(result).peso}kg
                  </p>
                  <p className="text-primary400 text-light text-lg">
                    Altura: {JSON.parse(result).altura}m
                  </p>
                  <p className="text-primary400 text-light text-lg">
                    Gênero: {JSON.parse(result).genero}
                  </p>
                  <p className="text-primary400 text-light text-lg">
                    Faixa Etaria: {JSON.parse(result).faixaEtaria}
                  </p>
                </div>
              </>
            </div>
            <div className="classificacaoResultado">
              <div className="">
                <h2 className="text-primary600 text-xl font-medium mb-3">
                  Classificação do IMC:
                </h2>
                <div className="flex gap-2 max-w-[642px]">
                  <p className="text-primary400 text-sm">
                    <strong>18,5 ou menos:</strong> Abaixo do normal - Procure
                    um médico. Pode ser característica do organismo ou
                    desnutrição.
                  </p>
                  <p className="text-primary400 text-sm mt-2">
                    <strong>Entre 18,6 e 24,9:</strong> Normal - Mantenha um
                    estilo de vida ativo e alimentação equilibrada.
                  </p>
                  <p className="text-primary400 text-sm mt-2">
                    <strong>Entre 25,0 e 29,9:</strong> Sobrepeso -
                    Pré-obesidade. Pode estar associado a diabetes e
                    hipertensão.
                  </p>
                  <p className="text-primary400 text-sm mt-2">
                    <strong>Entre 30,0 e 34,9:</strong> Obesidade grau I - Sinal
                    de alerta. Inicie mudanças e acompanhamento com
                    profissionais.
                  </p>
                  <p className="text-primary400 text-sm mt-2">
                    <strong>Entre 35,0 e 39,9:</strong> Obesidade grau II -
                    Mudanças no estilo de vida com acompanhamento profissional
                    são essenciais.
                  </p>
                  <p className="text-primary400 text-sm mt-2">
                    <strong>Acima de 40,0:</strong> Obesidade grau III - Risco
                    de doenças graves. Tratamento urgente necessário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
