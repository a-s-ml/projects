import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'quiz',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
