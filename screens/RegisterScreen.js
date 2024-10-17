import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    setErrorMessage(''); // Clear previous error messages

    // Basic validation
    if (!username || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://192.168.34.168:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const responseText = await response.text(); // Read response as text
      console.log(response.status, responseText); // Log status and response text

      const data = JSON.parse(responseText); // Parse the response text as JSON

      if (response.ok) {
        console.log(data.message); // Handle successful registration
        navigation.navigate('Login'); // Navigate to login screen on success
      } else {
        setErrorMessage(data.message); // Handle error
      }
    } catch (error) {
      console.error('Error registering:', error);
      setErrorMessage('Registration failed. Please try again.'); // Handle error
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Ionicons name="location" size={24} color="white" />
          <Text style={styles.logoText}>SOCaiL</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Create Account!</Text>
          <Text style={styles.subHeaderText}>Register with your information</Text>

          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="gray" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>REGISTER</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.signInButton} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.signInText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen; // Ensure this is present at the bottom of RegisterScreen.js


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ccff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeaderText: {
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  registerButton: {
    backgroundColor: '#4B0082',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInText: {
    color: '#4B0082',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});


