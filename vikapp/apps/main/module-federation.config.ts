import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['groups', 'questions', 'answers', 'quiz', 'add-question'],
};

export default config;
