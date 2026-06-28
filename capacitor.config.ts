import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.eaufaya.app',
  appName: 'Eau Faya',
  webDir: '.next', // On remet .next ici
  server: {
    url: 'https://votre-site-eau-faya.com', // 👈 Remplacez par le vrai lien de votre site internet
    cleartext: true
  }
};

export default config;