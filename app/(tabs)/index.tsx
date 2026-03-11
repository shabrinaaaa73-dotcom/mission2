import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* SECTION BACKGROUND GAMBAR */}
      <ImageBackground 
        source={require('../../assets/images/bg2.jpg')} 
        resizeMode="cover" 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.mainCard}>
            
            {/* SECTION FOTO PROFIL */}
            <View style={styles.imageWrapper}>
              <Image 
                source={require('../../assets/images/shb.jpeg')} 
                style={styles.profilePic} 
              />
            </View>

            {/* SECTION IDENTITAS */}
            <View style={styles.textContainer}>
              <Text style={styles.nameText}>Shabrina Yuspiana</Text>
              <View style={styles.badge}>
                <Text style={styles.nimText}>243303621210</Text>
              </View>
              <Text style={styles.majorText}>Sistem Informasi</Text>
            </View>

            {/* SECTION QUOTE */}
            <View style={styles.quoteCard}>
              <Text style={styles.quoteTitle}>Daily Reminder 🧸🎀</Text>
              <Text style={styles.quoteText}>
                "malas2an aja, pesaing sukses ku berkurang hehe"
              </Text>
            </View>

          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1, // Agar gambar memenuhi layar
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(253, 242, 242, 0.4)', // Overlay pink transparan agar bg tidak terlalu mencolok
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Putih agak transparan agar estetik
    width: '90%',
    borderRadius: 40,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#7B3F00',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 8,
  },
  imageWrapper: {
    padding: 8,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#D2B48C',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  nameText: {
    fontSize: 26,
    fontWeight: '800',
    color: '#4B2C20',
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#7B3F00',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 8,
  },
  nimText: {
    fontSize: 14,
    color: '#FFD1D1',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  majorText: {
    fontSize: 16,
    color: '#8D6E63',
    fontWeight: '500',
  },
  quoteCard: {
    backgroundColor: '#FFF5F5',
    padding: 20,
    borderRadius: 25,
    borderLeftWidth: 5,
    borderLeftColor: '#7B3F00',
    width: '100%',
  },
  quoteTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7B3F00',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  quoteText: {
    fontSize: 15,
    color: '#5D4037',
    fontStyle: 'italic',
    lineHeight: 22,
    textAlign: 'left',
  },
});