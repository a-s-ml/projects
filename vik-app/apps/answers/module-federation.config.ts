import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'answers',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
