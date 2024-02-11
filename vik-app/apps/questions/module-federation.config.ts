import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'questions',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
