import { StyleSheet, Text, View } from 'react-native';
import { Icon } from './Icon';

const tabs = [
  {
    name: 'Home',
    icon: 'mdi:home',
  },
  {
    name: 'Consult',
    icon: 'mdi:account',
  },
  {
    name: 'AIHealth',
    icon: 'mdi:lightning-bolt',
    isCenter: true,
  },
  {
    name: 'Records',
    icon: 'mdi:folder',
  },
  {
    name: 'Profile',
    icon: 'mdi:account',
  },
];

function BottomTabBar() {
  return (
    <View style={styles.footer}>
      {tabs.map(tab => (
        <View key={tab.name} style={styles.tab}>
          <Icon name={tab.icon} size={24} color="#333" />

          <Text style={styles.label}>{tab.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
  },

  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#94A3B8',
  },
});

export default BottomTabBar;
