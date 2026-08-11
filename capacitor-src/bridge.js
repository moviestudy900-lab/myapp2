import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { NativeBiometric } from 'capacitor-native-biometric';

window.CapBridge = { Capacitor, LocalNotifications, NativeBiometric };
