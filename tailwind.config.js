/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Chỉ định các file Tailwind cần quét
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--color-blue)",
        indigo: "var(--color-indigo)",
        purple: "var(--color-purple)",
        pink: "var(--color-pink)",
        red: "var(--color-red)",
        orange: "var(--color-orange)",
        yellow: "var(--color-yellow)",
        green: "var(--color-green)",
        teal: "var(--color-teal)",
        cyan: "var(--color-cyan)",
        white: "var(--color-white)",
        gray: "var(--color-gray)",
        gray1: "var(--color-gray1)",
        gray2: "var(--color-gray2)",
        gray3: "var(--color-gray3)",
        gray4: "var(--color-gray4)",
        gray5: "var(--color-gray5)",
        gray6: "var(--color-gray6)",
        gray7: "var(--color-gray7)",
        gray8: "var(--color-gray8)",
        gray9: "var(--color-gray9)",
        "gray-dark": "var(--color-gray-dark)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        black: "var(--color-black)",
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
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-safe-area"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".safe-area": {
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        },
        ".flexCenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".flexStart": {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        },
        ".flexEnd": {
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        },
        ".flexBetween": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".bgGradient": {
          background: "linear-gradient(214deg, #26262694, #26262600)",
        },
        ".bgAsideCategory": {
          background:
            "linear-gradient(19deg, #d12d2db5 -16.5%, #181818 17.68%, #871010e8 190.98%)",
        },
        ".bgCountdown": {
          background:
            "linear-gradient(0deg, rgba(220, 38, 38, 0.10) 0%, rgba(220, 38, 38, 0.10) 100%)",
        },
        ".bgButtonLinearPrimary": {
          background: "linear-gradient(103.03deg, #51EC84 0%, #148C3B 100.36%)",
          boxShadow:
            "0px 4px 4px 0px #FEA8A84D inset,0px -4px 4px 0px #FEA8A81A inset",
        },
        ".bgButtonLinearError": {
          background: "linear-gradient(103.03deg, #FE6B6B 0%, #D12D2D 100.36%)",
          boxShadow:
            "0px 4px 4px 0px #D12D2D4D inset, 0px -4px 4px 0px #FE6B6B1A inset",
        },
        ".bgGradientMain": {
          background:
            "linear-gradient(84deg, #352F2F -6.5%, #281E1E 33.68%, #151515 93.98%)",
        },
        ".bgGradientCadenla": {
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)",
        },
        ".bgLinearBrand2": {
          background: "linear-gradient(92.31deg, #78ADF6 0%, #0A5FD6 84.5%)",
        },
        ".bg-button-primaryActive": {
          background:
            "linear-gradient(0deg, rgba(220, 38, 38, 0.06) 0%, rgba(220, 38, 38, 0.06) 100%)",
        },
        ".bg-button-customGradient": {
          background:
            "linear-gradient(84deg, #393333 -16.5%, #373434 33.68%, #2e2c2c 93.98%)",
        },
        ".bg-button-customGradientDark": {
          background:
            "linear-gradient(84deg, #514a4a -16.5%, #2a1818c7 33.68%, #1e1313 93.98%)",
        },
        ".bg-button-customGradientRed": {
          background:
            "linear-gradient(180deg, #000000e3 -16.5%, #1c1c1c 13.68%, #dc262600 109.98%)",
        },
        ".bg-redGradient": {
          background:
            "linear-gradient(180deg, #201D1D 0%, #761414 100%), linear-gradient(0deg, rgba(220, 38, 38, 0.1), rgba(220, 38, 38, 0.1))",
        },
        ".bg-button-customGradientGrey": {
          background:
            "linear-gradient(178deg, #232222 5.5%, #0f0f0f 33.68%, #232121 93.98%)",
        },
        ".bg-linear-warning": {
          background:
            "linear-gradient(106.26deg, #ECD16F 1.76%, #D0A40A 74.88%)",
        },
        ".bgLinearBottomLineText": {
          background:
            "linear-gradient(90deg, #890000 0%, rgba(118, 20, 20, 0) 100%)",
        },
        ".bgBlur": {
          background:
            "linear-gradient(0deg, #171717 10.58%, rgba(23, 23, 23, 0.00) 100%)",
        },
        ".pd-col": {
          padding: "12px 14px",
        },
        ".container": {
          maxWidth: "1600px !important",
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".container-wrapper": {
          maxWidth: "1800px !important",
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
        ".bg-number-active": {
          background:
            "linear-gradient(180deg, #201d1d 0%, #761414 100%),linear-gradient(0deg, rgba(220, 38, 38, 0.1), rgba(220, 38, 38, 0.1))",
          border: "1px solid #dc2626",
          boxShadow:
            "0px 4px 4px 0px #ffcdcd40 inset, 0px 4px 16px 0px #b5000033",
        },
        ".money_txcb": {
          background: "linear-gradient(175deg, #FF0 3.78%, #FCC200 96.22%)",
          backgroundClip: "text",
          "-webkit-text-fill-color": "transparent",
          "-webkit-background-clip": "text",
        },
        ".borderBoxAgent": {
          background: "linear-gradient(180deg, #22C55E 0%, #144626 73.67%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),

    plugin(({ addUtilities, e, theme, variants }) => {
      addUtilities({
        ".flex-gap-wrapper": {
          overflow: "auto",
        },
        '[class*="flex-gap-"]:not([class*="flex-gap-wrapper"])': {
          margin: "calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap))",
          "& > *": {
            margin: "calc(var(--gap)) 0 0 calc(var(--gap))",
          },
        },
      });

      Object.entries(theme("gap")).forEach(([key, value]) => {
        addUtilities(
          {
            [`.flex-gap-${e(key)}`]: {
              "--gap": value,
            },
            [`.grid-gap-${e(key)}`]: {
              "--gap": value,
            },
          },
          variants("gap")
        );
      });
    }),
  ], // Thêm plugin nếu cần
};
