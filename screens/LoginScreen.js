// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://your-server-ip:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         console.log(data.message); // Handle successful login
//       } else {
//         console.log(data.message); // Handle error
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };
  

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <View style={styles.logoContainer}>
//           <Ionicons name="location" size={24} color="white" />
//           <Text style={styles.logoText}>SOCaiL</Text>
//         </View>
//         <View style={styles.formContainer}>
//           <Text style={styles.headerText}>Welcome!</Text>
//           <Text style={styles.subHeaderText}>Log in with your information</Text>
          
//           <TextInput
//             style={styles.input}
//             placeholder="Your Email Address"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//           />
          
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.passwordInput}
//               placeholder="Password"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//             />
//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
//             </TouchableOpacity>
//           </View>
          
//           <View style={styles.optionsContainer}>
//             <TouchableOpacity
//               style={styles.checkboxContainer}
//               onPress={() => setRememberMe(!rememberMe)}
//             >
//               <View style={[styles.checkbox, rememberMe && styles.checked]}>
//                 {rememberMe && <Ionicons name="checkmark" size={16} color="white" />}
//               </View>
//               <Text style={styles.checkboxLabel}>Remember me</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Text style={styles.forgotPassword}>Forgot Password</Text>
//             </TouchableOpacity>
//           </View>
          
//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.loginButtonText}>LOGIN</Text>
//           </TouchableOpacity>
          
//           <Text style={styles.orLoginWith}>Or Login with</Text>
          
//           <View style={styles.socialLoginContainer}>
//             <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
//               <Ionicons name="logo-facebook" size={24} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.socialButton, styles.twitterButton]}>
//               <Ionicons name="logo-twitter" size={24} color="white" />
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
//               <Ionicons name="logo-google" size={24} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e6ccff',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//   },
//   logoContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   logoText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   subHeaderText: {
//     color: 'gray',
//     marginBottom: 20,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderColor: 'lightgray',
//     paddingVertical: 10,
//     marginBottom: 20,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: 'lightgray',
//     marginBottom: 20,
//   },
//   passwordInput: {
//     flex: 1,
//     paddingVertical: 10,
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     marginRight: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checked: {
//     backgroundColor: '#4B0082',
//     borderColor: '#4B0082',
//   },
//   checkboxLabel: {
//     color: 'gray',
//   },
//   forgotPassword: {
//     color: '#4B0082',
//   },
//   loginButton: {
//     backgroundColor: '#4B0082',
//     borderRadius: 25,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   orLoginWith: {
//     textAlign: 'center',
//     color: 'gray',
//     marginBottom: 20,
//   },
//   socialLoginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   socialButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   facebookButton: {
//     backgroundColor: '#3b5998',
//   },
//   twitterButton: {
//     backgroundColor: '#1da1f2',
//   },
//   googleButton: {
//     backgroundColor: '#db4437',
//   },
// });

// export default LoginScreen;
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
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.message); // Handle successful login
      } else {
        console.log(data.message); // Handle error
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
          <Text style={styles.headerText}>Welcome!</Text>
          <Text style={styles.subHeaderText}>Log in with your information</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Your Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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
          
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checked]}>
                {rememberMe && <Ionicons name="checkmark" size={16} color="white" />}
              </View>
              <Text style={styles.checkboxLabel}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          
          <Text style={styles.orLoginWith}>Or Login with</Text>
          
          <View style={styles.socialLoginContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Ionicons name="logo-facebook" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.twitterButton]}>
              <Ionicons name="logo-twitter" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Ionicons name="logo-google" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity 
            style={styles.signUpButton} 
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#4B0082',
    borderColor: '#4B0082',
  },
  checkboxLabel: {
    color: 'gray',
  },
  forgotPassword: {
    color: '#4B0082',
  },
  loginButton: {
    backgroundColor: '#4B0082',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orLoginWith: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  twitterButton: {
    backgroundColor: '#1da1f2',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  signUpButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#4B0082',
    fontSize: 16,
  },
});

export default LoginScreen;
