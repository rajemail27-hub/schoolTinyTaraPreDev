import { Capacitor } from '@capacitor/core';

const API_HOST = Capacitor.getPlatform() === 'android'
  ? 'http://10.0.2.2:8000/api'
  : 'http://127.0.0.1:8000/api';

export const API_URL = API_HOST;
