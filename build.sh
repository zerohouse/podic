gulp --build
sleep 1
cordova build --release android
sleep 1
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore podic.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
sleep 1
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/podic.apk
sleep 1
mv platforms/android/build/outputs/apk/podic.apk ./
