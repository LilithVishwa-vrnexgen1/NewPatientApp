import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../theme/colors';

type SearchBarProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onMicPress?: () => void;
  onFilterPress?: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search doctors, tests, medicines...',
  onMicPress,
  onFilterPress,
}) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color={colors.textGray} />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textGray}
      />

      <View style={styles.divider} />

      <TouchableOpacity
        onPress={onMicPress}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Feather name="mic" size={20} color={colors.primaryBlue} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onFilterPress}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        style={{ marginLeft: 14 }}
      >
        <Feather name="sliders" size={20} color={colors.textDark} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 52,
    // width: 358,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: colors.textDark,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: colors.border,
    marginRight: 14,
  },
});

export default SearchBar;
