import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TabOneScreen() {
  const [showWebView, setShowWebView] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTheme, setCurrentTheme] = useState({
    primary: '#1a1a2e',
    secondary: '#e94560',
    accent: '#0f3460',
    text: '#ffffff'
  });

  const themes = [
    { primary: '#1a1a2e', secondary: '#e94560', accent: '#0f3460', text: '#ffffff' },
    { primary: '#2d1b69', secondary: '#ff6b6b', accent: '#4ecdc4', text: '#ffffff' },
    { primary: '#0f4c75', secondary: '#3282b8', accent: '#bbe1fa', text: '#ffffff' },
    { primary: '#2c3e50', secondary: '#e74c3c', accent: '#f39c12', text: '#ffffff' },
    { primary: '#8e44ad', secondary: '#e67e22', accent: '#f1c40f', text: '#ffffff' },
    { primary: '#1abc9c', secondary: '#e74c3c', accent: '#f39c12', text: '#2c3e50' },
    { primary: '#34495e', secondary: '#e74c3c', accent: '#f39c12', text: '#ecf0f1' },
    { primary: '#2c3e50', secondary: '#9b59b6', accent: '#3498db', text: '#ecf0f1' }
  ];

  const handleGitHubPress = () => {
    setShowWebView(true);
  };

  const handleTouchableOpacityPress = () => {
    setShowModal(true);
  };

  const handlePressablePress = () => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setCurrentTheme(randomTheme);
  };

  if (showWebView) {
    return (
      <View style={[styles.container, { backgroundColor: currentTheme.primary }]}>
        <TouchableOpacity 
          style={[styles.backButton, { backgroundColor: currentTheme.secondary }]} 
          onPress={() => setShowWebView(false)}
        >
          <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Voltar</Text>
        </TouchableOpacity>
        <WebView
          source={{ uri: 'https://github.com/ManoRokys' }}
          style={styles.webview}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.primary }]}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://github.com/ManoRokys.png' }}
          style={[styles.profileImage, { borderColor: currentTheme.accent }]}
        />
        
        <Text style={[styles.nameText, { color: currentTheme.secondary }]}>ManoRokys</Text>
        
        <TouchableOpacity 
          style={[styles.githubButton, { backgroundColor: currentTheme.accent }]} 
          onPress={handleGitHubPress}
        >
          <Text style={[styles.githubButtonText, { color: currentTheme.text }]}>Ver Perfil no GitHub</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.touchableButton, { backgroundColor: currentTheme.secondary }]} 
          onPress={handleTouchableOpacityPress}
        >
          <Text style={[styles.touchableButtonText, { color: currentTheme.text }]}>Informações Pessoais</Text>
        </TouchableOpacity>
        
        <Pressable 
          style={({ pressed }) => [
            styles.pressableButton,
            { 
              backgroundColor: currentTheme.accent,
              borderColor: currentTheme.secondary
            },
            pressed && styles.pressableButtonPressed
          ]} 
          onPress={handlePressablePress}
        >
          <Text style={[styles.pressableButtonText, { color: currentTheme.text }]}>Mudar Cores 🎨</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: currentTheme.accent }]}>
            <Text style={[styles.modalTitle, { color: currentTheme.text }]}>Informações Pessoais</Text>
            
            <View style={styles.infoContainer}>
              <Text style={[styles.infoLabel, { color: currentTheme.text }]}>Nome:</Text>
              <Text style={[styles.infoValue, { color: currentTheme.secondary }]}>Lucas Gomes Fagundes</Text>
              
              <Text style={[styles.infoLabel, { color: currentTheme.text }]}>Idade:</Text>
              <Text style={[styles.infoValue, { color: currentTheme.secondary }]}>20 anos</Text>
              
              <Text style={[styles.infoLabel, { color: currentTheme.text }]}>Curso:</Text>
              <Text style={[styles.infoValue, { color: currentTheme.secondary }]}>4º semestre da Fatec Registro</Text>
            </View>
            
            <TouchableOpacity
              style={[styles.closeButton, { backgroundColor: currentTheme.secondary }]}
              onPress={() => setShowModal(false)}
            >
              <Text style={[styles.closeButtonText, { color: currentTheme.text }]}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
  githubButton: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  githubButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchableButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  touchableButtonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  pressableButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  pressableButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
  pressableButtonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: width * 0.9,
    maxWidth: 400,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 25,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 10,
  },
  closeButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
