// app/_layout.tsx
import { Stack } from 'expo-router';
import * as Linking from 'expo-linking';
import { useEffect } from 'react';

export default function RootLayout() {
  // Handle deep links without NavigationContainer
  useEffect(() => {
    // Get initial URL if app was opened from a link
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Initial URL:', url);
        // Expo Router handles navigation automatically
        // based on file structure
        // If you need to implement any custom logic, you can do it here
      }
    });

    // Listen for new URLs while app is open
    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('New URL:', url);
      // Expo Router handles navigation automatically, but if you need to implement any
      // custom logic, you can do it here
    });

    return () => subscription.remove();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="items/[id]" options={{ title: 'Items' }} />
    </Stack>
  );
}
