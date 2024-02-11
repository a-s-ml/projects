import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['groups', 'answers', 'questions', 'viktorins'],
};

export default config;
