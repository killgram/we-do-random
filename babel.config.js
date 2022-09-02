module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@ui-kit': './src/ui-kit',
          '@navigators': './src/navigators',
          '@components': './src/components',
          '@screens': './src/screens',
          '@classes': './src/classes',
          '@assets': './src/assets',
          '@sagas': './src/sagas',
          '@services': './src/services',
          '@store': './src/store',
          '@typescript': './src/typescript',
          '@utils': './src/utils',
          '@configurations': './src/configurations',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
}
