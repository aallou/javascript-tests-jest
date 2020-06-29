## Prepare environment
### install yarn (if it's not installed)
`npm install -g yarn`

### init project (it's create package.json)
`yarn init -y : créer le package.json`

### install jest as a dependency
`yarn add -D jest @types/jest`

### use babel (as transpiler to use ES6)
`yarn add --dev babel-jest @babel/core @babel/preset-env`

```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### To run tests : 
`yarn jest` : for all tests
`yarn jest <filepath>` : for a specific file (example `yarn jest ./base.test.js`)


## Tests
1. simple example : base.test.js
2. mock a function (the function is passed on argument) : mock-method.test.js
3. mock a function (the case when a function call another function) : mock-method2.test.js