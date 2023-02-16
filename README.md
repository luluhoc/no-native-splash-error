# No Native Splash Screen Repro

RUN

```
yarn install
yarn expo run:ios
```

Error
---
```
 WARN  Possible Unhandled Promise Rejection (id: 1):
Error: No native splash screen registered for given view controller. Call 'SplashScreen.show' for given view controller first.
Error: No native splash screen registered for given view controller. Call 'SplashScreen.show' for given view controller first.
    at construct (native)
    at apply (native)
    at _construct (http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.native.nonative:3334:28)
    at Wrapper (http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.native.nonative:3296:25)
    at construct (native)
    at _createSuperInternal (http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.native.nonative:97715:322)
    at call (native)
    at CodedError (http://localhost:8081/index.bundle?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true&app=com.native.nonative:97723:26)
```


```
expo-env-info 1.0.5 environment info:
    System:
      OS: macOS 13.2
      Shell: 5.8.1 - /bin/zsh
    Binaries:
      Node: 18.14.0 - ~/.nvm/versions/node/v18.14.0/bin/node
      Yarn: 1.22.19 - ~/.yarn/bin/yarn
      npm: 9.3.1 - ~/.nvm/versions/node/v18.14.0/bin/npm
    Managers:
      CocoaPods: 1.11.3 - /opt/homebrew/bin/pod
    SDKs:
      iOS SDK:
        Platforms: DriverKit 22.1, iOS 16.1, macOS 13.0, tvOS 16.1, watchOS 9.1
    IDEs:
      Android Studio: 2021.3 AI-213.7172.25.2113.9014738
      Xcode: 14.1/14B47b - /usr/bin/xcodebuild
    npmGlobalPackages:
      eas-cli: 3.5.2
    Expo Workflow: bare
```
