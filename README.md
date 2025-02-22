# Calculadora de IMC (BMI Calculator)

Uma ferramenta educativa para calcular o Índice de Massa Corporal (IMC) de forma simples e intuitiva. Este projeto foi desenvolvido com React e utiliza o conceito de componentes funcionais e hooks para gerenciar estados e cálculos em tempo real.

---

## Descrição

A Calculadora de IMC permite que o usuário insira seu peso (em kg) e altura (em metros), além de selecionar o gênero e a faixa etária. Com base nesses dados, o sistema calcula o IMC utilizando a fórmula clássica:

> **IMC = Peso / (Altura²)**

Os resultados são exibidos dinamicamente, acompanhados de uma classificação que varia de "Abaixo do normal" até "Obesidade grau III", conforme os intervalos definidos pela Organização Mundial da Saúde e outros estudos epidemiológicos.

---

## Tecnologias Utilizadas

- **React** – Biblioteca JavaScript para construção de interfaces.
- **Next.js** – (Indicativo pela diretiva `"use client"`) Framework para aplicações React.
- **Tailwind CSS** – Framework de CSS utilitário para estilização rápida e responsiva.

---

## Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/gabrielnips/bmc-imc-calculator.git
   cd bmc-imc-calculator
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o projeto em ambiente de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   
   Abra seu navegador e acesse `http://localhost:3000` para visualizar a calculadora.

5. **Utilização:**
   - Insira seu peso e altura nos campos indicados.
   - Selecione o gênero e a faixa etária.
   - Veja o cálculo do IMC e sua classificação sendo exibidos dinamicamente.

---

## Considerações Importantes

- **Ferramenta Educativa:** Esta calculadora é destinada apenas a fins informativos e não substitui a avaliação médica. Consulte um profissional de saúde para diagnósticos precisos.
- **Fórmula do IMC:** A mesma fórmula é utilizada para homens e mulheres, porém a interpretação dos resultados pode variar de acordo com outros fatores individuais, como a composição corporal.

---

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar o projeto, sinta-se à vontade para:

- Abrir **issues** para reportar bugs ou sugerir melhorias.
- Realizar **pull requests** com novas funcionalidades ou correções.

---

## Créditos

- **Referências Científicas:** Baseado em estudos da Organização Mundial da Saúde e pesquisas epidemiológicas sobre o IMC.

---
