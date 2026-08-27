module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'react-native-iconify/babel',
      {
        icons: [
          'mdi:home',
          'mdi:account',
          'mdi:lightning-bolt',
          'mdi:folder',
        ],
      },
    ],
  ],
};
