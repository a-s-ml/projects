import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import { ModuleFederationConfig } from '@nx/webpack';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  remotes: [['groups', 'https://80q.ru/mf/groups/remoteEntry.js']],
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
