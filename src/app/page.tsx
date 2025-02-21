"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-between gap-5">
        <form
          className="bg-primary200 py-10 px-14 rounded-lg flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const imc = calcularIMC(weight, height);
            alert(
              `Peso: ${weight} kg | Altura: ${height} m | IMC: ${imc} | Gênero: ${gender} | Faixa Etária: ${ageGroup}`
            );
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
            doenças cardiovasculares e diabetes.
          </p>
          <p className="text-primary400 text-sm mt-3">
            Nosso site adota essa abordagem validada para oferecer uma
            ferramenta prática e confiável, auxiliando os usuários no
            monitoramento do seu estado nutricional e incentivando escolhas mais
            saudáveis. Descubra mais sobre os estudos por trás do IMC e os
            benefícios de manter um estilo de vida equilibrado!
          </p>
        </div>
      </div>
    </div>
  );
}
