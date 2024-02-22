import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['groups', 'questions', 'answers', 'quiz'],
};

export default config;
