module.exports = {
  "extends": [
    "xo",
    "prettier"
  ],
  "env": {
    "jest": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
    {
      "singleQuote": true
    }
    ]
  },
  "plugins": [
    "prettier"
  ]
}
