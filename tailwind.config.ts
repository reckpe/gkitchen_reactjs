/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Chỉ định các file Tailwind cần quét
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "rgb(1, 107, 55)",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        gray1: "rgba(245, 245, 245, 1)",
        gray2: "rgba(238, 238, 238, 1)",
        gray3: "rgba(224, 224, 224, 1)",
        gray4: "rgba(189, 189, 189, 1)",
        gray5: "rgba(158, 158, 158, 1)",
        gray6: "rgba(117, 117, 117, 1)",
        gray7: "rgba(97, 97, 97, 1)",
        gray8: "rgba(66, 66, 66, 1)",
        gray9: "rgba(33, 33, 33, 1)",
        "gray-dark": "rgb(23,23,23)",
        primary: "#3caf4b",
        "primary-hover": "rgb(55, 160, 69)",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
        black: "#000",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          '"Liberation Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    }, // Bạn có thể tùy chỉnh theme tại đây
  },
  plugins: [], // Thêm plugin nếu cần
};
