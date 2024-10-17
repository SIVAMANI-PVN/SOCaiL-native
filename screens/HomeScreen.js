import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from 'react-native-heroicons/outline';

const features = [
  {
    name: 'Push to deploy',
    description:
      'Deploy your apps effortlessly with just a push of a button.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Keep your data secure with built-in SSL certificates.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Manage your tasks efficiently with our simple queue system.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Protect your applications with advanced security measures.',
    icon: FingerPrintIcon,
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Empower Your Social Media Presence</Text>
        <Text style={styles.subtitle}>Analyze trends, generate content, and optimize your strategy.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.featuresContainer}>
        <View style={styles.row}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Trend Compiler</Text>
            <Text style={styles.featureDescription}>Create and optimize content seamlessly.</Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Content Writer</Text>
            <Text style={styles.featureDescription}>Create and optimize content seamlessly.</Text>
          </View>
        </View>
        <View style={styles.centerFeature}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Chatbot</Text>
            <Text style={styles.featureDescription}>Instant assistance for your needs.</Text>
          </View>
        </View>
      </View>

      {/* Features section */}
      <View style={styles.featuresSection}>
        <Text style={styles.featuresHeader}>Deploy faster</Text>
        <Text style={styles.featuresTitle}>Everything you need to deploy your app</Text>
        <Text style={styles.featuresDescription}>
          Quickly deploy and manage your applications with our comprehensive tools.
        </Text>
        {features.map((feature) => (
          <View key={feature.name} style={styles.featureDetail}>
            <feature.icon style={styles.icon} />
            <View style={styles.featureInfo}>
              <Text style={styles.featureName}>{feature.name}</Text>
              <Text style={styles.featureDetailDescription}>{feature.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.joinSection}>
        <Text style={styles.joinTitle}>Join SOCaiL today!</Text>
        <Text style={styles.joinSubtitle}>Take your content to the next level.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6ccff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  featuresContainer: {
    padding: 20,
    alignItems: 'center', // Center the components
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  centerFeature: {
    marginVertical: 10, // Add margin between the rows
    alignItems: 'center', // Center the Chatbot component
    
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    width: '48%',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  featureDescription: {
    textAlign: 'center',
    color: '#666666',
  },
  featuresSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  featuresHeader: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  featuresDescription: {
    marginTop: 10,
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  featureDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    color: '#4f46e5',
  },
  featureInfo: {
    flex: 1,
  },
  featureName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333333',
  },
  featureDetailDescription: {
    color: '#666666',
    marginTop: 5,
  },
  joinSection: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#e6ccff', // Matching color with the header
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0, // Sharp edges
    borderBottomRightRadius: 0, // Sharp edges
  },
  joinTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
    textAlign: 'center',
  },
  joinSubtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
