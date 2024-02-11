import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  remotes: [
    ['groups', 'https://80q.ru/mf/groups/remoteEntry.js'],
    ['answers', 'https://80q.ru/mf/answers/remoteEntry.js'],
    ['questions', 'https://80q.ru/mf/questions/remoteEntry.js'],
    ['viktorins', 'https://80q.ru/mf/viktorins/remoteEntry.js'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
