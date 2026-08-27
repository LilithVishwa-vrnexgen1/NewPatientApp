import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from './Icon';

const tabs = [
  {
    name: 'Home',
    icon: 'boxicons:home-alt',
  },
  {
    name: 'Consult',
    icon: 'boxicons:user',
  },
  {
    name: 'AIHealth',
    icon: 'boxicons:bolt',
    isCenter: true,
  },
  {
    name: 'Records',
    icon: 'boxicons:folder',
  },
  {
    name: 'Profile',
    icon: 'boxicons:user',
  },
];

function BottomTabBar() {
  return (
    <View style={styles.footer}>
      {tabs.map(tab => {
        // Middle AI Health tab
        if (tab.isCenter) {
          return (
            <View key={tab.name} style={styles.centerTab}>
              <Pressable style={styles.aiButton}>
                <Icon name={tab.icon} size={28} color="#FFFFFF" />
              </Pressable>

              <Text style={styles.centerLabel}>AI Health</Text>
            </View>
          );
        }

        // Normal tabs
        return (
          <Pressable key={tab.name} style={styles.tab}>
            <Icon name={tab.icon} size={24} color="#333" />

            <Text style={styles.label}>{tab.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    marginTop: 4,
    fontSize: 12,
    color: '#94A3B8',
  },

  centerTab: {
    flex: 1,
    alignItems: 'center',
    marginTop: -28,
  },

  aiButton: {
    width: 56,
    height: 56,
    borderRadius: 28,

    borderWidth: 4,
    borderColor: '#FFFFFF',

    backgroundColor: '#635BFF',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#BFDBFE',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 6,
  },

  centerLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#94A3B8',
  },
});

export default BottomTabBar;
