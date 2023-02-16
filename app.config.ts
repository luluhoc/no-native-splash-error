import { ExpoConfig } from '@expo/config-types';

const LIGHT_SPLASH = {
  image: './assets/splash.png',
  backgroundColor: '#FFFFFF',
};

const DARK_SPLASH = {
  image: './assets/cdorfordark.png',
  backgroundColor: '#000000',
};

const SHARED_SPLASH = {
  splash: {
    ...LIGHT_SPLASH,
    dark: {
      ...DARK_SPLASH,
    },
  },
};
export default (): ExpoConfig => {
  return {
    name: "NO NATIVE",
    slug: 'NONATIVE',
    scheme: 'com.native.nonative',
    version: '1.0.0',
    orientation: 'portrait',
    jsEngine: 'hermes',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: SHARED_SPLASH,
    ios: {
      ...SHARED_SPLASH,
      userInterfaceStyle: 'automatic',
      jsEngine: 'hermes',
      entitlements: {
        'com.apple.developer.networking.wifi-info': true,
      },
      infoPlist: {
        UIUserInterfaceStyle: 'Automatic',
        ITSAppUsesNonExemptEncryption: false,
        NSLocationWhenInUseUsageDescription:
          'This app needs access to your location.',
        NSLocationAlwaysAndWhenInUseUsageDescription:
          'This app needs access to your location.',
        NSLocationAlwaysUsageDescription:
          'This app needs access to your location.',
      },
      bundleIdentifier: 'com.native.nonative',
    },
    android: {
      ...SHARED_SPLASH,
      userInterfaceStyle: 'automatic',
      jsEngine: 'hermes',
      package: 'com.native.nonative',
      // googleServicesFile: './android/app/google-services.json',
      permissions: [
        'WRITE_SETTINGS',
        'WRITE_SECURE_SETTINGS',
        'ACCESS_FINE_LOCATION',
        'ACCESS_COARSE_LOCATION',
        'VIBRATE',
        'POST_NOTIFICATIONS',
        'RECEIVE_BOOT_COMPLETED',
        'SCHEDULE_EXACT_ALARM',
      ],
      config: {
        googleMaps: {
          apiKey: 'xxxx-xxxxx',
        },
      },
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    runtimeVersion: '1.0.0',
    assetBundlePatterns: ['**/*'],
    web: {
      favicon: './assets/favicon.png',
    },

    plugins: [
      'expo-localization',
      [
        'expo-build-properties',
        {
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
    ],
    extra: {
      apiUrl: process.env.API_MAC,
      apiUrlBasic: process.env.API_MAC_BASIC,
      eas: {
        projectId: 'xxxx',
      },
    },
  };
};
