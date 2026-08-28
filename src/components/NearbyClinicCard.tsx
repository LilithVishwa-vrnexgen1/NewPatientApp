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

export type Clinic = {
  id: string;
  name: string;
  distanceKm: number;
  isOpen24x7?: boolean;
  image: ImageSourcePropType | string;
};

type NearbyClinicCardProps = {
  clinic: Clinic;
  onGetDirections?: (clinic: Clinic) => void;
  onPress?: (clinic: Clinic) => void;
};

const NearbyClinicCard: React.FC<NearbyClinicCardProps> = ({
  clinic,
  onGetDirections,
  onPress,
}) => {
  const clinicImage =
    typeof clinic.image === 'string' ? { uri: clinic.image } : clinic.image;
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onPress?.(clinic)}
    >
      <Image source={clinicImage} style={styles.image} />

      <View style={styles.infoWrap}>
        <Text style={styles.name}>{clinic.name}</Text>
        <Text style={styles.distance}>{clinic.distanceKm} km away</Text>

        {clinic.isOpen24x7 && <Text style={styles.openText}>24/7 Open</Text>}

        <TouchableOpacity
          style={styles.directionsButton}
          onPress={() => onGetDirections?.(clinic)}
        >
          <Text style={styles.directionsText}>Get Directions</Text>
          <Feather name="chevron-right" size={14} color={colors.primaryBlue} />
        </TouchableOpacity>
      </View>

      <Feather name="chevron-right" size={20} color={colors.textGray} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 12,
    backgroundColor: colors.white,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textDark,
  },
  distance: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 2,
  },
  openText: {
    fontSize: 12,
    color: '#22C55E',
    fontWeight: '600',
    marginTop: 2,
  },
  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  directionsText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primaryBlue,
    marginRight: 2,
  },
});

export default NearbyClinicCard;
