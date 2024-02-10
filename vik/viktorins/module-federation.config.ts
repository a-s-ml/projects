import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'viktorins',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
