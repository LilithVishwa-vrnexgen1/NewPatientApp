import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../components/Icon';

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
  onPress?: () => void;
}

interface QuickActionsProps {
  label: string;
  actions: QuickAction[];
  onViewAll?: () => void;
  viewAllLabel?: string;
}

function ActionsGrid({
  label,
  actions,
  onViewAll,
  viewAllLabel = 'View All',
}: QuickActionsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{label}</Text>

        <Pressable onPress={onViewAll}>
          <Text style={styles.viewAll}>{viewAllLabel}</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        {actions.map(action => (
          <Pressable
            key={action.id}
            style={styles.action}
            onPress={action.onPress}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: action.backgroundColor },
              ]}
            >
              <Icon name={action.icon} size={28} color={action.iconColor} />
            </View>

            <Text style={styles.actionLabel}>{action.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#0F172A',
    includeFontPadding: false,
  },

  viewAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3767C7',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
  },

  action: {
    width: '22%',
    alignItems: 'center',
  },

  iconContainer: {
    width: 62,
    height: 62,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },

  actionLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#475569',
    textAlign: 'center',
  },
});

export default ActionsGrid;
