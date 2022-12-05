# We Do Random

## What is the app about:
WeDoRandom is an application with which you can make a choice by flipping a coin. Playing a single player game, you can decide with what taste to choose a coffee or go out to hang out today or not. Together with friends in a team game, you can decide which movie to watch in the evening or pizza with what taste to order

## Used tech:
- [React-Native 0.69.5](https://reactnative.dev/)
- [Redux](https://redux.js.org/)
- [React-I18next](https://react.i18next.com/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Redux-Persist](https://github.com/rt2zz/redux-persist)
- [Realm](https://realm.io/)
- [IcoMoon](https://icomoon.io/)
- [React-Native-Sound](https://github.com/zmxv/react-native-sound)
- [React-Native-Config](https://github.com/luggit/react-native-config)
- [React-Native-Camera](https://react-native-camera.github.io/react-native-camera/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Axios](https://axios-http.com/)
- [React-Navigation](https://reactnavigation.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [Node-JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Cors](https://github.com/expressjs/cors)

# Download (only android):
<img style="height: 15rem; width: 15rem" src="https://github.com/killgram/we-do-random/raw/main/src/assets/img/wdr-qr.png" alt="qr-code">

## or you can use [link](https://drive.google.com/file/d/1kjicDbMcEHsNRhCn4eU_y_kC_T1FFZXr/view?usp=share_link)

# A few steps to set up the environment (for dev):

In `/node-modules folder/react-native-camera/RNCamera.js`:

```sh
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
```

Then in `/node-modules folder/react-native/index.js`:

```sh
get ColorPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ColorPropType;
},

get EdgeInsetsPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
},

get PointPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').PointPropType;
},

get ViewPropTypes(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ViewPropTypes;
},
```
