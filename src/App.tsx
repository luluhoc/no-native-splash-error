import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Constants from 'expo-constants';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as SplashScreen from 'expo-splash-screen';
import SplashImageDark from '../assets/cdorfordark.png';

SplashScreen.preventAutoHideAsync();

function AnimatedSplashScreen({ children, background }) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const splash = SplashImageDark;
  const [isSplashAnimationComplete, setAnimationComplete] =
    React.useState(false);

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 55,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady, animation]);

  const onImageLoaded = React.useCallback(async () => {
    try {
      // await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: background }}>
      {isAppReady && children}

      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            {
              backgroundColor: background,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants.manifest?.splash?.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={splash}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

function AnimatedAppLoader({ children, background }) {
  const [isSplashReady, setSplashReady] = React.useState(false);
  // const a = useColorModeValue('light', 'dark');
  React.useEffect(() => {
    function prepare() {
      setSplashReady(true);
    }

    prepare();
  }, []);

  if (!isSplashReady) {
    return null;
  }

  return (
    <AnimatedSplashScreen background={background}>
      {children}
    </AnimatedSplashScreen>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);
  React.useEffect(() => {
    async function prepare() {
      console.log('app is preparing');
      try {
        // Pre-load fonts, make any API calls you need to do here
        // simulate a long loading process
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        console.log('app is ready');
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);
  if (!appIsReady) {
    return (
      <View
        style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
      />
    );
  }
  return (
    <AnimatedAppLoader background="black">
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </AnimatedAppLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
