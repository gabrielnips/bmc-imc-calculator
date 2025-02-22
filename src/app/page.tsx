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

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-5 px-3 py-10">
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
              A fórmula utilizada para calcular o IMC (Índice de Massa Corporal)
              é amplamente reconhecida e baseada em estudos científicos reais,
              como os conduzidos pela Organização Mundial da Saúde e pesquisas
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
              É importante notar que a fórmula para calcular o IMC é a mesma
              para homens e mulheres, embora a interpretação dos resultados
              possa variar conforme fatores individuais, como composição
              corporal e distribuição de gordura.
            </p>
            <p className="text-primary400 text-sm mt-3">
              Este site é uma ferramenta educativa e não substitui a avaliação
              médica. Consulte um profissional de saúde para orientações
              personalizadas e diagnóstico preciso.
            </p>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-4 right-4 z-50 rounded-2xl border-2 border-solid border-primary600 githubButton cursor-pointer "
        onClick={() => handleRedirect("https://github.com/gabrielnips")}
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Github">
            <path
              id="Vector"
              d="M39.0769 61.4369C28.3077 64.7185 28.3077 55.9677 24 54.8739M54.1538 68V59.5337C54.2346 58.4905 54.0959 57.4418 53.7468 56.4573C53.3977 55.4728 52.8463 54.5751 52.1292 53.8238C58.8923 53.0581 66 50.4548 66 38.51C65.9994 35.4556 64.8427 32.5184 62.7692 30.3062C63.7511 27.6339 63.6817 24.6802 62.5754 22.0586C62.5754 22.0586 60.0338 21.2929 54.1538 25.2964C49.2173 23.9374 44.0135 23.9374 39.0769 25.2964C33.1969 21.2929 30.6554 22.0586 30.6554 22.0586C29.5491 24.6802 29.4797 27.6339 30.4615 30.3062C28.3726 32.5348 27.2147 35.4986 27.2308 38.5756C27.2308 50.4329 34.3385 53.0362 41.1015 53.8894C40.3929 54.6332 39.8464 55.5201 39.4976 56.4926C39.1488 57.4651 39.0054 58.5012 39.0769 59.5337V68"
              stroke="#6195b7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </>
  );
}
