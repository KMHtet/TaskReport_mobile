module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@functions': './src/app/features',
          '@navigations': './src/app/navigations',
          '@screens': './src/app/features/FeaturesScreen.tsx',
          '@screens/': './src/app/features',
          '@components': './src/app/components',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
