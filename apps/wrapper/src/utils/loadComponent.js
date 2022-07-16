// @ts-ignore

import { fetchRemote } from './fetchRemote';

export const loadComponent =
  (remoteName, remoteUrl, moduleName, scope = 'default') =>
  async () => {
    if (!(remoteName in window)) {
      // Need to load the remote first
      // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
      // eslint-disable-next-line no-undef
      await __webpack_init_sharing__(scope); // TODO when would you use a different scope?
      const fetchedContainer = await fetchRemote(
        `${remoteUrl.replace(/\/$/, '')}/remoteEntry.js`,
        remoteName,
      );
      // eslint-disable-next-line no-undef
      await fetchedContainer.init(__webpack_share_scopes__[scope]);
    }
    const container = window[remoteName]; // Assuming the remote has been loaded using the above function
    const factory = await container.get(moduleName);
    return factory();
  };
