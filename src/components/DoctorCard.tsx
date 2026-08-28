import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../theme/colors';
import { Icon } from './Icon';

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  hospital: string;
  fee: number;
  avatar: ImageSourcePropType | string; // image URL or local require result
  isOnline?: boolean;
};

type DoctorCardProps = {
  doctor: Doctor;
  onBookOnline?: (doctor: Doctor) => void;
  onVisitClinic?: (doctor: Doctor) => void;
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onBookOnline,
  onVisitClinic,
}) => {
  const avatarSource =
    typeof doctor.avatar === 'string' ? { uri: doctor.avatar } : doctor.avatar;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.avatarWrap}>
          <Image source={avatarSource} style={styles.avatar} />
          {doctor.isOnline && <View style={styles.onlineDot} />}
        </View>

        <View style={styles.infoWrap}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>

          <View style={styles.metaRow}>
            <Icon name="ant-design:star-filled" size={13} color="#FACC15" />

            <Text style={styles.metaText}>
              {' '}
              {doctor.rating} ({doctor.reviewCount} reviews) |{' '}
              {doctor.experienceYears}+ yrs exp.
            </Text>
          </View>

          <View style={styles.metaRow}>
            <Feather name="home" size={13} color={colors.textGray} />
            <Text style={styles.metaText}> {doctor.hospital}</Text>
          </View>
        </View>

        <View style={styles.feeWrap}>
          <Text style={styles.feeLabel}>Consultation Fee</Text>
          <Text style={styles.feeValue}>₹{doctor.fee}</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => onBookOnline?.(doctor)}
        >
          <Text style={styles.bookButtonText}>Book Online</Text>
          <Feather name="chevron-right" size={16} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.visitButton}
          onPress={() => onVisitClinic?.(doctor)}
        >
          <Text style={styles.visitButtonText}>Visit Clinic</Text>
          <Feather name="chevron-right" size={16} color={colors.primaryBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 14,
    backgroundColor: colors.white,
    marginBottom: 14,
  },
  topRow: {
    flexDirection: 'row',
  },
  avatarWrap: {
    position: 'relative',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 12,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: colors.white,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
  },
  specialty: {
    fontSize: 13,
    color: colors.primaryBlue,
    marginTop: 1,
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: colors.textGray,
  },
  feeWrap: {
    alignItems: 'flex-end',
  },
  feeLabel: {
    fontSize: 11,
    color: colors.textGray,
  },
  feeValue: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryBlue,
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 10,
  },
  bookButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3463AF',
    borderRadius: 10,
    paddingVertical: 12,
  },
  bookButtonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
    marginRight: 4,
  },
  visitButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    borderRadius: 10,
    paddingVertical: 12,
  },
  visitButtonText: {
    color: colors.primaryBlue,
    fontWeight: '600',
    fontSize: 14,
    marginRight: 4,
  },
});

export default DoctorCard;
