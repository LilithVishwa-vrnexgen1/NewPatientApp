import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../theme/colors';
import { Icon } from './Icon';

type AppHeaderProps = {
  variant?: 'home' | 'page';
  title?: string;
  tagline?: string;
  onBackPress?: () => void;
  onNotificationPress?: () => void;
  hasNotification?: boolean;
};

const AppHeader = ({
  variant = 'page',
  title = '',
  tagline = 'Take charge of your health today!',
  onBackPress,
  onNotificationPress,
  hasNotification = true,
}: AppHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        {variant === 'page' ? (
          <TouchableOpacity
            onPress={onBackPress}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Feather name="chevron-left" size={26} color={colors.textDark} />
            {/*<Icon name="ph:less-than-bol" size={26} color={colors.textDark} />*/}
          </TouchableOpacity>
        ) : (
          <View style={{ gap: 12 }}>
            <Image
              style={styles.logoBox}
              source={require('../assets/Patient_App_Logo.png')}
            />
          </View>
        )}

        <View style={styles.titleWrap}>
          {variant === 'home' ? (
            <>
              <Text style={styles.logoText}>
                Smart <Text style={styles.logoTextAccent}>Clinics</Text>
              </Text>
              <Text style={styles.tagline}>{tagline}</Text>
            </>
          ) : (
            <Text style={styles.pageTitle}>{title}</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={onNotificationPress}
          style={styles.bellButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="bell" size={22} color={colors.textDark} />
          {/*<Icon name="clarity:notification-line" size={24} color="#333" />*/}
          {hasNotification && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    // paddingBottom: 14,
  },
  row: {
    width: 390,
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 16,
    paddingVertical: 2,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 53.85,
    height: 47.48,
    borderRadius: 11.64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 22,
    height: 22,
  },
  titleWrap: {
    flex: 1,
    marginLeft: 12,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '700',

    // color: colors.textDark,
  },
  logoTextAccent: {
    color: '#3463AF',
  },
  tagline: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  pageTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.textDark,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.notificationRed,
    borderWidth: 1,
    borderColor: colors.white,
  },
});

export default AppHeader;
