/// <reference types="@capacitor-firebase/messaging" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tinytara.preschool',
  appName: 'Tiny Tara Preschool',
  webDir: 'dist/tiny-tara-preschool/browser',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    FirebaseMessaging: {
      presentationOptions: ['alert', 'badge', 'sound'],
    },
  },
};

export default config;
