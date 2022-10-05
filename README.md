# We Do Random

# Few step to install:

In `/node-modules folder/react-native-camera/RNCamera.js`:

```sh
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
```

Then in `/node-modules folder/react-native/index.js`:

```sh
// Deprecated Prop Types
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