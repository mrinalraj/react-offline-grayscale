# react-offline-grayscale

Make your react app respond when offline.

[![NPM](https://img.shields.io/npm/v/react-offline-grayscale.svg)](https://www.npmjs.com/package/react-offline-grayscale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

using npm:

```bash
npm install --save react-offline-grayscale
```

using yarn:

```bash
yarn add react-offline-grayscale
```

## Usage

#### Root component

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ReactOffline from 'react-offline-grayscale'

ReactDOM.render(
	<ReactOffline>
		<App />
	</ReactOffline>,
	document.getElementById('root'),
)
```

# Props

| name                  | type    | required | default         | description                                  |
| --------------------- | ------- | -------- | --------------- | -------------------------------------------- |
| **enableClick**       | boolean | false    | false           | decides if clicks are allowed on offline     |
| **filter**            | string  | false    | grayscale       | filter to applied on the document            |
| **barStyle**          | object  | false    |                 | style object for offline indication bar      |
| **customPageStyle**   | object  | false    |                 | style object for document applied on offline |
| **customOfflineText** | string  | false    | You are offline | Text for offline indication                  |

## License

### Contributing

Pull Requests are very welcome!

## License

MIT © [mrinalraj](https://github.com/mrinalraj)
