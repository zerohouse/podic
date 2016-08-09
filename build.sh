cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore podic.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/podic.apk
