# APP - Almundo

A continuación una explicación general de la aplicación.

# React Native CLI - Instalación y entorno

Para el desarrollo de esta app de muestra, se utilizó el cli de react native. Las instrucciones para la instalación y configuración del ambiente de desarrollo se encuentran en la documentación oficial de React Native.

***https://facebook.github.io/react-native/docs/getting-started***

## Levantar la aplicación en ambiente local
Despues de preparar el entorno de desarrollo y de clonar el repositorio ejecutamos en la raíz del proyecto:
- npm install

> La aplicación no fue configurada para iOS

**React Native  CLI < 3**
- react-native run-android

**React Native CLI  >= 3**
- npx react-native run-android.

Esto nos va a permitir testear la aplicación ya sea en un dispositivo fisico conectado o uno emulado.

## Posible error Node 12.14, NPM 6 y CLI 3
Es posible que al momento de compilar la aplicación la ventana de metro nos muestre un error del regex que revisa las rutas del sistema.

Puntualmente sucede con las ultimas versiones del cli de react native y npm, para solucionar esta falla se debe realizar la siguiente corrección:

En el archivo:
````
node_modules/metro-config/src/defaults/blacklist.js
````

Se reemplaza la variable  **sharedBlacklist** por la siguiente:

````
var  sharedBlacklist = [
    /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
    /website\/node_modules\/.*/,
    /heapCapture\/bundle\.js/,
    /.*\/__tests__\/.*/
];
````

Se guarda el archivo y se procede a compilar.
> Fuente: https://www.youtube.com/watch?v=pSOegajhmVU

## Compilar APK debug
Para compilar una APK de prueba se ejecuta desde la raíz de la aplicación:

**React Native  CLI < 3**
- react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
- cd android
- gradlew assembleDebug

**React Native CLI  >= 3**
- npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
- cd android
- gradlew assembleDebug

> Para poder ejecutar el comando gradlew se debe tener el JDK previamente instalado y configurado en las variables de entorno del sistema. Ver la documentación de React Native para mayor información.

## Ambiente de desarrollo
Bajo las siguientes especificaciones se desarrolló y se probó la aplicación.
````
npx react-native info
````

````
System:
    OS: Windows 10 10.0.18363
    CPU: (4) x64 Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz
    Memory: 3.66 GB / 11.88 GB
  Binaries:
    Node: 12.14.0 - C:\Program Files\nodejs\node.EXE
    npm: 6.13.4 - C:\Program Files\nodejs\npm.CMD
  SDKs:
    Android SDK:
      API Levels: 28, 29
      Build Tools: 28.0.3, 29.0.2
      System Images: android-29 | Intel x86 Atom_64, android-29 | Google APIs Intel x86 Atom, android-29 | Google APIs Intel x86 Atom_64, android-29 | Google Play Intel x86 Atom
  IDEs:
    Android Studio: Version  3.5.0.0 AI-191.8026.42.35.6010548
  npmPackages:
    react: 16.9.0 => 16.9.0
    react-native: 0.61.5 => 0.61.5
````

# Componentes de la aplicación

A continuación se detallan las partes que componen la aplicación.

# Splash Screen
Se emula una pantalla de carga que tarda 3 segundos en hacer la transición a la siguiente pantalla.

![Screenshot](https://imageshack.com/a/img921/7331/6DsHm7.png "width=200" "height=400")
# Listado de hoteles

En este listado se pueden apreciar todos los hoteles que están registrados en la base de datos como colección

![Screenshot](https://imageshack.com/a/img923/3549/mok31H.png)

Adicional se puede apreciar una barra de busqueda en donde se puede realizar un **filtrado por el nombre del hotel**

![Screenshot](https://imageshack.com/a/img923/7582/YxPjud.png)

# Información de un hotel

Muestra la información de un hotel en especifico, incluye un botón inferior que redirige a la aplicación de google maps al usuario con la ubicación del hotel en el mapa.

![Screenshot](https://imageshack.com/a/img921/7331/6DsHm7.png)

# APK debug ya compilada

El siguiente enlace contiene la apk ya compilada y probada.
https://drive.google.com/file/d/1n3V9rWnO0PJUjTAtxsdosAfeWCiBPYVn/view?usp=sharing