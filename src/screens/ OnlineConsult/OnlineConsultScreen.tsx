import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import SearchBar from '../../shared/SearchBar';
import DoctorCard, { Doctor } from '../../components/DoctorCard';
import NearbyClinicCard, { Clinic } from '../../components/NearbyClinicCard';
import hospital from '../../assets/hospital.png';
import doctor from '../../assets/doctor.jpg';
import nurse from '../../assets/nurse.jpg';

const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Rohan Mehta',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviewCount: 512,
    experienceYears: 12,
    hospital: 'City Care Hospital',
    fee: 799,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg', //Next to Change this
    isOnline: true,
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    rating: 4.8,
    reviewCount: 436,
    experienceYears: 9,
    hospital: 'Skin & You Clinic',
    fee: 699,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    isOnline: true,
  },
];

const CLINICS: Clinic[] = [
  {
    id: '1',
    name: 'City Care Hospital',
    distanceKm: 0.8,
    isOpen24x7: true,
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200',
  },
];

const OnlineConsultScreen = () => {
  const [activeTab, setActiveTab] = useState<'online' | 'clinic'>('online');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <SearchBar />

      {/* Online / Clinic Visit toggle */}
      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'online' && styles.toggleButtonActive,
          ]}
          onPress={() => setActiveTab('online')}
        >
          <Feather
            name="video"
            size={16}
            color={activeTab === 'online' ? colors.white : colors.textDark}
          />
          <Text
            style={[
              styles.toggleText,
              activeTab === 'online' && styles.toggleTextActive,
            ]}
          >
            {' '}
            Online
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'clinic' && styles.toggleButtonActive,
          ]}
          onPress={() => setActiveTab('clinic')}
        >
          <Feather
            name="home"
            size={16}
            color={activeTab === 'clinic' ? colors.white : colors.textDark}
          />
          <Text
            style={[
              styles.toggleText,
              activeTab === 'clinic' && styles.toggleTextActive,
            ]}
          >
            {' '}
            Clinic Visit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick action cards */}
      <View style={styles.quickRow}>
        <View style={styles.quickCard}>
          <Feather name="check-square" size={20} color="#22C55E" />
          <Text style={styles.quickTitle}>My Appointments</Text>
          <Text style={styles.quickSubtitle}>View & manage</Text>
        </View>

        <View style={styles.quickCard}>
          <Feather name="clock" size={20} color="#A855F7" />
          <Text style={styles.quickTitle}>History</Text>
          <Text style={styles.quickSubtitle}>Past consultations</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image
          source={require('../../assets/video_chat.png')}
          style={styles.image}
        />
        <Text style={styles.imageText}>Find the right doctor, your way</Text>
        <Text style={{ position: 'absolute', top: 70, left: 10 }}>
          Consult online or visit a clinic in person — your health, your choice.
        </Text>
      </View>
      {/* Popular Doctors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Doctors</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {DOCTORS.map(doctor => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          onBookOnline={d => console.log('Book online', d.name)}
          onVisitClinic={d => console.log('Visit clinic', d.name)}
        />
      ))}

      {/* Nearby Clinics */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Nearby Clinics</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {CLINICS.map(clinic => (
        <NearbyClinicCard
          key={clinic.id}
          clinic={clinic}
          onGetDirections={c => console.log('Directions to', c.name)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  toggleRow: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 4,
    marginTop: 10,
    gap: 18,
    height: 50,
  },
  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    // paddingHorizontal: 42,
    borderRadius: 12,
  },
  toggleButtonActive: {
    backgroundColor: '#3463AF',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
  },
  toggleTextActive: {
    color: colors.white,
  },
  quickRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  quickCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14,
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 8,
  },
  quickSubtitle: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 2,
  },

  image: {
    width: 358,
    height: 186,
    borderRadius: 14,
    position: 'relative',
  },
  imageText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '800',
    width: 150,
    lineHeight: 30,
    left: 10,
    top: 10,
    height: 60,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1E5AF2',
  },
});

export default OnlineConsultScreen;
