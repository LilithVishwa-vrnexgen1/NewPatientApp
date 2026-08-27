module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'react-native-iconify/babel',
      {
        icons: [
          'boxicons:home-alt',
          'boxicons:user',
          'boxicons:bolt',
          'boxicons:folder',
          'mdi:lightning-bolt',
          'mdi:folder',
        ],
      },
    ],
  ],
};
