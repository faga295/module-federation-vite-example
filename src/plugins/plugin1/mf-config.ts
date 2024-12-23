export default {
  name: 'plugin1',
  exposes: {
    '.': './src/plugins/plugin1/index.tsx',
  },
  fileName: 'plugins/plugin1/remoteEntry-[hash].js',
  shared: {
    react: {
      requiredVersion: '18',
    },
    'react-dom': {},
  },
};
