import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  remotes: [
    ['groups', 'https://80q.ru/mf/groups/remoteEntry.js'],
    ['questions', 'https://80q.ru/mf/questions/remoteEntry.js'],
    ['answers', 'https://80q.ru/mf/answers/remoteEntry.js'],
    ['quiz', 'https://80q.ru/mf/quiz/index.html'],
  ],
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
