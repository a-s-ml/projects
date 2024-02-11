import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['groups'],
};

export default config;
