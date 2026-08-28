import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface MetricsCardProps {
  children: ReactNode;
}

function MetricsCard({ children }: MetricsCardProps) {
  return <View style={styles.vitalsCard}>{children}</View>;
}

const styles = StyleSheet.create({
  vitalsCard: {
    // height: 194,
    flex: 1,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#F1F5F9',
    borderRadius: 20,

    // Shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.102, // #0000001A ≈ 10%
    shadowRadius: 6,

    elevation: 4,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
});

export default MetricsCard;
