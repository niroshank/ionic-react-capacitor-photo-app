import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'React MUI Capacitor App',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
