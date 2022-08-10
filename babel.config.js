{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "10"
        }
      }
    ],
    "@babel/react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "babel-plugin-macros",
    ["babel-plugin-styled-components"]
  ]
}
