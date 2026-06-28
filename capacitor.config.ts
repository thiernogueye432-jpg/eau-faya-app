import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.eaufaya.app',
  appName: 'Eau Faya',
  webDir: 'public', 
  server: {
    url: 'https://votre-site-eau-faya.com', // 👈 Remplacez par le vrai lien de votre site internet
    cleartext: true
  }
};

export default config;