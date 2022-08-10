module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    important: "root",
    theme: {
      fontFamily: {
        abhaya: ["Abhaya Libre"],
        actor: ["Actor"],
      },
      fontSize: {
        'base': ['14px', '16px'],
        '2xl': ['24px', '28px'],
        '4xl': ['36px', '44px'],
      },
      borderRadius: {
        '3xl': '25px',
      },
      extend: {
        boxShadow: {
          'xl': 'box-shadow: 16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
        },
        colors: {
          primary: {
            DEFAULT: "#F4F4F4",
          },
          primaryFocus: {
            DEFAULT: "rgba(255, 255, 255, 0.6)",
          },
          stick: {
            DEFAULT: "#A9A9A9",
            red: "#FF0000",
            blue: "#366EFF",
            yellow: "#FFEB33",
          },
          switch: {
            DEFAULT: "#366EFF",
            green: "#10C200",
          },
          bgBlack: {
            DEFAULT: "#121212",
            area: "#222222",
            item: "#282828",
          },
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    variants: {
      extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};
  