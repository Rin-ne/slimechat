module.exports = {
    dependency: {
        "vasern": {
            platforms: {
                ios: {
                    project: './node_modules/vasern/ios/Vasern.xcodeproj',
                    podspecPath: './node_modules/vasern/vasern.podspec'
                },
                android: {
                    sourceDir: './node_modules/vasern/android',
                    manifestPath: 'src/main/AndroidManifest.xml',
                    packageImportPath: 'com.reactlibrary.vasern'
                }
            }
        },
        "react-native-sqlite-storage": {
            platforms: {
                android: {
                    sourceDir:
                        "../node_modules/react-native-sqlite-storage/platforms/android-native",
                    packageImportPath: "import io.liteglue.SQLitePluginPackage;",
                    packageInstance: "new SQLitePluginPackage()"
                }
            }
        }
    }
};