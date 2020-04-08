# vue-todo

## Vue CLI の DL

```
npm i -g @vue/cli
```

## Vue プロジェクトの作成

```
# カレントディレクトリに Vue プロジェクトを作成する
vue create .
Vue CLI v4.2.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) 
```

## Storybook
```
(base) MacBook-Air:vue-todo ynakamura$ vue add storybook

📦  Installing vue-cli-plugin-storybook...

+ vue-cli-plugin-storybook@1.2.2
added 8 packages from 4 contributors and audited 939495 packages in 36.175s
found 0 vulnerabilities

✔  Successfully installed plugin: vue-cli-plugin-storybook

? What do you want to generate? Initial framework
? What storybook version do you want? (Please specify semver range) >=5.3.0
? Use Storybook CSF (component story format)? Yes
? Use Storybook Docs? No
```

## vuetify

```
(base) MacBook-Air:vue-todo ynakamura$ vue add vuetify
 WARN  There are uncommited changes in the current repository, it's reco
mmended to commit or stash them first.
? Still proceed? Yes

📦  Installing vue-cli-plugin-vuetify...

+ vue-cli-plugin-vuetify@2.0.5
added 2 packages from 1 contributor and audited 967040 packages in 32.219s
found 0 vulnerabilities

✔  Successfully installed plugin: vue-cli-plugin-vuetify

? Choose a preset: Default (recommended)

🚀  Invoking generator for vue-cli-plugin-vuetify...
📦  Installing additional dependencies...

added 7 packages from 5 contributors and audited 969221 packages in 31.627s
found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
 vuetify  Discord community: https://community.vuetifyjs.com
 vuetify  Github: https://github.com/vuetifyjs/vuetify
 vuetify  Support Vuetify: https://github.com/sponsors/johnleider
```

## 拡張機能

- Vue VS Code Extension Pack
- Prettier - Code formatter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


