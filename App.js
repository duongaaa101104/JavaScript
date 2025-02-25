import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PhoneNumberValidation = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
      return true;
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
      return false;
    }
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      Alert.alert('Thông báo', 'Số điện thoại hợp lệ!', [{ text: 'OK' }]);
      navigation.navigate('Home');
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không đúng định dạng! Vui lòng nhập lại.', [{ text: 'OK' }]);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.login}>Đăng Nhập</Text>
        <Text style={styles.dangnhap}>Nhập số điện thoại</Text>
        <Text style={styles.sodienthoai}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
            validatePhoneNumber(text);
          }}
        />
        {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Trang chủ</Text>
      <Text>Chào mừng bạn đến với ứng dụng OneHousing Pro!</Text>
    </View>
  );
};

export default function baitap08() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhoneValidation">
        <Stack.Screen name="PhoneValidation" component={PhoneNumberValidation} options={{ title: 'Đăng Nhập' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 40,
    justifyContent: 'center',
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  dangnhap: {
    fontSize: 18,
    marginBottom: 20,
  },
  sodienthoai: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});