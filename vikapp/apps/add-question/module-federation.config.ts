import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'add-question',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
