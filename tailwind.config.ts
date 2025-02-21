import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary100: "var(--primary-100)",
        primary200: "var(--primary-200)",
        primary300: "var(--primary-300)",
        primary400: "var(--primary-400)",
        primary450: "var(--primary-400)",
        primary500: "var(--primary-500)",
        primary550: "var(--primary-550)",
        primary600: "var(--primary-600)",
      },
    },
  },
  plugins: [
    function ({
      addComponents,
    }: {
      addComponents: (components: Record<string, any>) => void;
    }) {
      addComponents({
        ".checkbox": {
          marginRight: "0.5rem", // mr-2
          cursor: "pointer", // cursor-pointer
          transition: "all 0.3s", // transition-all
          appearance: "none", // appearance-none
          backgroundColor: "var(--primary-500)", // bg-primary500
          padding: "0.75rem", // p-3
          borderRadius: "0.5rem", // rounded-lg
          position: "relative", // Necessário para o pseudo-elemento
        },

        ".checkbox:hover": {
          backgroundColor: "var(--primary-550)", // hover:bg-primary550
        },

        ".checkbox:checked": {
          backgroundColor: "var(--primary-550)", // checked:bg-primary550
        },

        ".checkbox::before": {
          content: '""', // Cria o pseudo-elemento
          position: "absolute", // Posiciona o pseudo-elemento dentro do input
          top: "50%", // Centraliza verticalmente
          left: "50%", // Centraliza horizontalmente
          transform: "translate(-50%, -50%)", // Ajuste fino da centralização
          width: "1rem", // Largura da bola ou quadrado
          height: "1rem", // Altura da bola ou quadrado
          backgroundColor: "var(--primary-400)", // Cor da bola ou quadrado
          borderRadius: "30%", // Faz o elemento ser redondo (para bola)
          transition: "all 0.3s", // Animação de transição
          opacity: "0", // Inicialmente invisível
        },

        ".checkbox:checked::before": {
          opacity: "1", // Torna visível quando o input está marcado
        },
      });
    },
  ],
} satisfies Config;
