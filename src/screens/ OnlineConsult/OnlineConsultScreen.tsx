import '../../../global.css';
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../../theme/colors';
import SearchBar from '../../shared/SearchBar';
import DoctorCard, { Doctor } from '../../components/DoctorCard';
import NearbyClinicCard, { Clinic } from '../../components/NearbyClinicCard';
import hospital from '../../assets/hospital.png';
import doctorImg from '../../assets/doctor.jpg';
import nurse from '../../assets/nurse.jpg';
import { Icon } from '../../components/Icon';
import ActionsGrid from '../../shared/ActionsGrid';
import AppHeader from '../../components/AppHeader';

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
    avatar: doctorImg, //Next to Change this
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
    avatar: nurse,
    isOnline: true,
  },
];

const CLINICS: Clinic[] = [
  {
    id: '1',
    name: 'City Care Hospital',
    distanceKm: 0.8,
    isOpen24x7: true,
    image: hospital,
  },
];

const quickActions = [
  {
    id: 'general physician',
    label: 'General Physician',
    icon: 'fa6-solid:user-doctor',
    iconColor: '#22C55E',
    backgroundColor: '#F0FDF4',
    onPress: () => console.log('General Physician'),
    size: 30,
  },
  {
    id: 'dentist',
    label: 'Dentist',
    icon: 'mdi:tooth',
    iconColor: '#1E5AF2',
    backgroundColor: '#EFF6FF',
    onPress: () => console.log('Dentist'),
    size: 30,
  },
  {
    id: 'Cardiologist',
    label: 'Cardiologist',
    icon: 'material-symbols-light:cardio-load-rounded',
    iconColor: '#8A5CF6',
    backgroundColor: '#FAF5FF',
    onPress: () => console.log('Cardiologist'),
    size: 35,
  },
  {
    id: 'dermatologist',
    label: 'Dermatologist',
    icon: 'material-symbols-light:dermatology',
    iconColor: '#EA580C',
    backgroundColor: '#FFF7ED',
    onPress: () => console.log('Dermatologist'),
    size: 35,
  },
  {
    id: 'pediatrician',
    label: 'Pediatrician',
    icon: 'healthicons:pediatric-surgery',
    iconColor: '#EF4444',
    backgroundColor: '#FEF2F2',
    onPress: () => console.log('Pediatrician'),
    size: 35,
  },
  {
    id: 'Gynecologist',
    label: 'Gynecologist',
    icon: 'reicon:female-filled',
    iconColor: '#8A5CF6',
    backgroundColor: '#FAF5FF',
    onPress: () => console.log('Gynecologist'),
    size: 35,
  },
  {
    id: 'orthopedic',
    label: 'Orthopedic',
    icon: 'material-symbols-light:orthopedics',
    iconColor: '#60A5FA',
    backgroundColor: '#EFF6FF',
    onPress: () => console.log('Orthopedic'),
    size: 35,
  },
  {
    id: 'neurologist',
    label: 'Neurologist',
    icon: 'material-symbols:neurology',
    iconColor: '#22C55E',
    backgroundColor: '#F0FDF4',
    onPress: () => console.log('Neurologist'),
    size: 35,
  },
];

const OnlineConsultScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState<'online' | 'clinic'>('online');

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        variant="page"
        title="Online Consult"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-red-500 flex-row text-center ">
          Hello Lilith Vishwa
        </Text>
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
            <Icon
              name="material-symbols:video-call-outline"
              size={20}
              color={activeTab === 'online' ? colors.white : '#6B7280'}
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
            <Icon
              name="cil:hospital"
              size={20}
              color={activeTab === 'clinic' ? colors.white : '#6B7280'}
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
            <View style={[styles.bgIcon, { backgroundColor: '#F0FDF4' }]}>
              <Icon
                name="material-symbols:calendar-check-outline"
                size={22}
                color="#22C55E"
                // style={styles.iconCard}
              />
            </View>
            <View style={{ width: 88 }}>
              <Text style={styles.quickTitle}>My Appointments</Text>
              <Text style={styles.quickSubtitle}>View & manage</Text>
            </View>
          </View>

          <View style={styles.quickCard}>
            <View style={[styles.bgIcon, { backgroundColor: '#FAF5FF' }]}>
              <Icon
                name="material-symbols-light:calendar-clock"
                size={24}
                color="#A855F7"
              />
            </View>
            <View style={{ width: 88 }}>
              <Text style={styles.quickTitle}>History</Text>
              <Text style={styles.quickSubtitle}>Past </Text>
              <Text style={styles.quickSubtitle}>consultations </Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Image
            source={require('../../assets/video_chat.png')}
            style={styles.image}
          />
          {/*<Text style={styles.imageText}>Find the right doctor, your way</Text>
        <Text style={{ position: 'absolute', top: 70, left: 10 }}>
          Consult online or visit a clinic in person — your health, your choice.
        </Text>*/}
        </View>
        <View style={styles.specialities}>
          <ActionsGrid label="Specialities" actions={quickActions} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  cardShadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3, // Android
  },
  toggleRow: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    padding: 4,
    marginTop: 10,
    gap: 18,
    height: 50,
    // backgroundColor: 'ffffff',
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.06,
    // shadowRadius: 8,
    // elevation: 1, // Android
  },
  toggleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 42,
    borderRadius: 12,
    gap: 15,
  },
  toggleButtonActive: {
    backgroundColor: '#3463AF',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  toggleTextActive: {
    color: colors.white,
  },
  quickRow: {
    flexDirection: 'row',
    borderColor: '#F1F5F9',
    // backgroundColor: 'ffffff',
    gap: 16,
    marginTop: 16,
    // paddingHorizontal: 16,
  },
  bgIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F0FDF4',
    height: 48,
    width: 36,
    borderRadius: 12,
  },
  quickCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    borderRadius: 16,
    padding: 12,
    gap: 12,
  },
  iconCard: {
    width: 36,
    height: 48,
  },
  quickTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    // color: colors.textDark,
    marginTop: 8,
  },
  quickSubtitle: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 2,
  },

  image: {
    width: '100%',
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
  specialities: {
    marginTop: 15,
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
