/**
 * Metro configuration for Expo + custom React Native tweaks
 * https://reactnative.dev/docs/metro
 */

const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const os = require('os');

// Temporary polyfill for Node environments where availableParallelism isn't defined
if (typeof os.availableParallelism !== 'function') {
  os.availableParallelism = () => os.cpus().length;
}

// Custom Metro configuration from old RN project
const customConfig = {
  resolver: {
    /* Example: add custom source extensions if needed
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
    */
  },
  transformer: {
    /* Example: custom transformer options if any
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    */
  },
  // Add any other custom config here
};

// Merge Expo default config with custom config
const config = mergeConfig(getDefaultConfig(__dirname), customConfig);

module.exports = config;
