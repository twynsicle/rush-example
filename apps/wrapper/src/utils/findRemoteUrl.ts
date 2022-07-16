import { Remote } from './Remotes';

export const findRemoteUrl = (remoteName: string, remotes: Remote[]): string => {
  const remote = remotes.find((r) => r.name === remoteName);
  return remote?.url || '';
};
