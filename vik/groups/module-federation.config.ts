import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'groups',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
