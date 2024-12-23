export default {
  name: 'plugin2',
  exposes: {
    '.': './src/plugins/plugin2/index.tsx',
  },
  fileName: 'plugins/plugin2/remoteEntry-[hash].js',
  shared: {
    react: {
      requiredVersion: '18',
    },
    'react-dom': {},
  },
};
