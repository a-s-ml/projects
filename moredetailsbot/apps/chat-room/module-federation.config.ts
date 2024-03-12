import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'chat-room',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
