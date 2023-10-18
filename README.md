# @whatskit/shell-exec

A tiny cross-platform promise based wrapper around child_process.spawn.

## ⚙️ Install

Install the package locally within you project folder with your package manager:

With `npm`:
```sh
npm install @whatskit/shell-exec
```

With `yarn`:
```sh
yarn add @whatskit/shell-exec
```

With `bun`:
```sh
bun add @whatskit/shell-exec
```

## 📖 Usage

```ts
import shellExec from '@whatskit/shell-exec'
shellExec('echo Hi!').then(console.log).catch(console.log)
```

## 📚 API

### `shellExec(command, options)`

**Parameters:**

- *`command`* {String | Array} - String or Array of commands to run
- *`options`* {Object} - Options object passed to [`child_process.spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)

The function then returns a `Promise`.

See the hosted docs [here](https://paka.dev/npm/shell-exec@1.1.0/api).

## 🪪 License

[MIT © Tiaan du Plessis](./LICENSE)


