// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyBwzTt88MuKOFx-bipjwn_QymUi9Csqrh8',
  authDomain: 'piggo-dd36b.firebaseapp.com',
  projectId: 'piggo-dd36b',
  storageBucket: 'piggo-dd36b.firebasestorage.app',
  messagingSenderId: '124504006385',
  appId: '1:124504006385:web:fe4bb178d10c7474a49350',
  measurementId: 'G-G4GJEYX6D0',
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
