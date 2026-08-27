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
          'ph:less-than-bold',
          'clarity:notification-line',
          'flowbite:search-outline',
          'fa7-solid:microphone',
          'eva:options-outline',
          'material-symbols:video-call-outline',
          'cil:hospital',
          'material-symbols:calendar-check-outline',
          'material-symbols-light:calendar-clock',
          'fa6-solid:user-doctor',
          'mdi:tooth',
          'material-symbols-light:cardio-load-rounded',
          'material-symbols-light:dermatology',
          'healthicons:pediatric-surgery',
          'reicon:female-filled',
          'material-symbols-light:orthopedics',
          'material-symbols:neurology',
          'ant-design:star-filled',
          'grommet-icons:form-next', //next Icon
        ],
      },
    ],
  ],
};
