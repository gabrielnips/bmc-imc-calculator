"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-between gap-5">
        <form
          className="bg-primary200 py-10 px-14 rounded-lg flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              ` Peso: ${weight} | Altura: ${height} | Genero: ${gender} | Idade: ${ageGroup}`
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
                placeholder="Ex: 1.74 cm"
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
                className="checkbox" // customize the checkbox on tailwind.config.ts
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
                className="checkbox" // customize the checkbox on tailwind.config.ts
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
                className="checkbox" // customize the checkbox on tailwind.config.ts
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
                className="checkbox" // customize the checkbox on tailwind.config.ts
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
        <div>sda</div>
      </div>
    </div>
  );
}
