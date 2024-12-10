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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // 'blue-purple': 'linear-gradient(90deg, #4f46e5, #6b21a8)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
    //     // 设置全局圆角
    borderRadius: {
      DEFAULT: "0.5rem", // 默认所有组件的圆角
      none: "0", // 无圆角
      sm: "0.125rem", // 小圆角
      md: "0.375rem", // 中等圆角
      lg: "0.5rem", // 大圆角
      xl: "1rem", // 特大圆角
    },
  },
  plugins: [],
} satisfies Config;
