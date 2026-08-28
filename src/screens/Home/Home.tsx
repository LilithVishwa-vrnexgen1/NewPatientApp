import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import ActionsGrid from '../../shared/ActionsGrid';
import { Icon } from '../../components/Icon';
import MetricsCard from '../../shared/MetricsCard';

const quickActions = [
  {
    id: 'consultation',
    label: 'Consultation',
    icon: 'fe:calendar',
    iconColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
    onPress: () => console.log('Consultation'),
  },
  {
    id: 'lab-tests',
    label: 'Lab Tests',
    icon: 'icomoon-free:lab',
    iconColor: '#A855F7',
    backgroundColor: '#FAF5FF',
    onPress: () => console.log('Lab Tests'),
  },
  {
    id: 'medicines',
    label: 'Medicines',
    icon: 'solar:medical-kit-outline',
    iconColor: '#10B981',
    backgroundColor: '#ECFDF5',
    onPress: () => console.log('Medicines'),
  },
  {
    id: 'wallet',
    label: 'Wallet',
    icon: 'solar:card-2-outline',
    iconColor: '#F97316',
    backgroundColor: '#FFF7ED',
    onPress: () => console.log('Wallet'),
  },
  {
    id: 'emergency',
    label: 'Emergency',
    icon: 'solar:bell-outline',
    iconColor: '#EF4444',
    backgroundColor: '#FEF2F2',
    onPress: () => console.log('Emergency'),
  },
  {
    id: 'reports',
    label: 'My Reports',
    icon: 'mdi:file-report-outline',
    iconColor: '#6366F1',
    backgroundColor: '#EEF2FF',
    onPress: () => console.log('My Reports'),
  },
  {
    id: 'wearable',
    label: 'Wearable',
    icon: 'material-symbols:watch',
    iconColor: '#14B8A6',
    backgroundColor: '#F0FDFA',
    onPress: () => console.log('Wearable'),
  },
  {
    id: 'wellness',
    label: 'Wellness',
    icon: 'solar:heart-outline',
    iconColor: '#D946EF',
    backgroundColor: '#FDF4FF',
    onPress: () => console.log('Wellness'),
  },
];

const vitals = [
  {
    id: 'steps',
    label: 'Steps',
    value: '8,640',
    icon: 'material-symbols:steps',
    iconColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  {
    id: 'sleep',
    label: 'Sleep',
    value: '7h 45m',
    icon: 'material-symbols:bedtime',
    iconColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  {
    id: 'heart-rate',
    label: 'Heart Rate',
    value: '72 BPM',
    icon: 'mdi:heart',
    iconColor: '#A855F7',
    backgroundColor: '#FAF5FF',
  },
  {
    id: 'calories',
    label: 'Calories',
    value: '1,560',
    icon: 'mdi:fire',
    iconColor: '#F97316',
    backgroundColor: '#FFF7ED',
  },
];

function Home() {
  // const handleViewAll = () => {
  //   console.log('View all clicked');
  // };
  //
  //
  return (
    <ScrollView style={styles.main}>
      <Pressable style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={styles.avatar}
          />
          <View style={styles.onlineDot} />
        </View>
        <View>
          <Text style={styles.title}>
            Good Morning, <Text style={styles.name}>Priya</Text>
          </Text>
          <Text style={styles.message}>Take charge of your health today!</Text>
        </View>
      </Pressable>
      <View style={styles.membershipCard}>
        <View style={styles.membershipHeader}>
          <Text style={styles.membershipCardTitle}>Premium Membership</Text>

          <Pressable style={styles.manageButton}>
            <Text style={styles.manageText}>Manage</Text>

            <Icon name="mdi:chevron-right" size={20} color="#3767C7" />
          </Pressable>
        </View>

        <View style={styles.membershipImgoutline}>
          <Image
            source={require('../../assets/MemberShip_card.png')}
            style={styles.membershipImage}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={styles.health}>
        <MetricsCard>
          <View style={styles.cardHeader2}>
            <Text style={styles.cardTitle}>Health Score</Text>
            <Icon name="hugeicons:information-circle" size={10} />
          </View>
          <Text>82/ 100</Text>
        </MetricsCard>
        <MetricsCard>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Today's Vitals</Text>
            <Pressable>
              <Text style={styles.viewAll}>View All</Text>
            </Pressable>
          </View>
          <View style={styles.vitalsList}>
            {vitals.map(vital => (
              <View style={styles.vitalRow}>
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: vital.backgroundColor },
                  ]}
                >
                  <Icon name={vital.icon} size={20} color={vital.iconColor} />
                </View>

                <Text style={styles.vitalLabel}>{vital.label}</Text>

                <Text style={styles.vitalValue}>{vital.value}</Text>
              </View>
            ))}
          </View>
        </MetricsCard>
      </View>

      <ActionsGrid label="Quick Actions" actions={quickActions} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
  },

  membershipCard: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },

  membershipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  membershipCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#0F172A',
  },

  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  manageText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#3767C7',
  },

  membershipImgoutline: {
    width: '100%',
    height: 126,
    borderRadius: 14,
    overflow: 'hidden',
  },

  membershipImage: {
    width: '100%',
    height: '100%',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 2,
    gap: 12,

    // backgroundColor: '#FFFFFF',
  },
  avatarWrapper: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  onlineDot: {
    position: 'absolute',
    backgroundColor: '#22C55E',
    height: 9,
    width: 9,
    borderRadius: 20,
    bottom: 0,
    right: 1,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },

  welcome: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#0F172A',
  },
  name: {
    color: '#3463AF',
  },
  message: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    color: '#64748B',
  },

  // MetricsCard
  health: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 12,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 2,
  },
  cardHeader2: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 16,
    gap: 4,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#0F172A',
  },

  viewAll: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3767C7',
  },

  vitalsList: {
    gap: 12,
  },

  vitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  vitalLabel: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: '#64748B',
  },

  vitalValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  iconBox: {
    height: 24,
    width: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
