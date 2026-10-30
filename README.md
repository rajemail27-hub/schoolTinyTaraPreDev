# TinyTaraPreschool

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Mobile apps

The Angular app is packaged for iOS and Android with Capacitor. The website build and
server-side rendering configuration remain unchanged. To create or refresh the native
projects after changing the Angular app, run:

```bash
npm run sync:mobile
```

Open the native project in its IDE with:

```bash
npm run open:android
npm run open:ios
```

Android builds require Android Studio and the Android SDK. iOS builds require macOS
and Xcode. The app ID is `com.tinytara.preschool`; change it before publishing if you
need to use an identifier associated with your own organization.

### Firebase push notification setup

Native push notifications use Firebase Cloud Messaging. Before registering devices:

1. Create a Firebase project and register Android (`com.tinytara.preschool`) and iOS
   apps with matching application identifiers.
2. Place the Android Firebase config at `android/app/google-services.json` and the
   iOS config at `ios/App/App/GoogleService-Info.plist`. These files are ignored by
   Git and must be provided locally.
3. In Firebase, configure an APNs authentication key for the iOS app. In Xcode,
   enable the Push Notifications capability and select a valid development team.
4. Configure the API's `FIREBASE_SERVICE_ACCOUNT_PATH` to a Firebase service-account
   JSON file with Cloud Messaging permissions. Keep it outside source control.
5. Apply the API database migration, then run `npm run sync:mobile` and rebuild the
   Android or iOS app.

The app asks for notification permission after sign-in, registers the FCM token to
that account, and removes the account's registration on sign-out. Web behavior does
not register for push notifications.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
