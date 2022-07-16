import React, { createContext, useState, useContext, FC } from 'react';

export interface Remote {
  name: string;
  url?: string;
}

export interface Remotes {
  remotes: Remote[];
  updateRemoteUrl: (name: string, newUrl: string) => void;
}

const initRemotes = [
  { name: 'app1', url: process.env.APP1_HOST || 'http://localhost:3001' },
  { name: 'app2', url: process.env.APP2_HOST || 'http://localhost:3002' },
];

const initState: Remotes = {
  remotes: initRemotes,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateRemoteUrl: () => {},
};

const STORAGE_KEY = 'remotes';

const storeRemotes = (remotes: Remote[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(remotes));
};

const hydrateRemotes = (): Remote[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
    return [];
  } catch {
    return [];
  }
};

export const RemotesContext = createContext(initState);

export const RemotesProvider: FC<{ children: any }> = ({ children }) => {
  const storedRemotes = hydrateRemotes();
  const [remotes, setRemotes] = useState<Remote[]>(
    storedRemotes.length > 0 ? storedRemotes : initRemotes,
  );
  const updateRemoteUrl = (name: string, newUrl: string): void => {
    console.log('updateRemoteUrl: ' + newUrl);
    setRemotes((prevRemotes) => {
      console.log('setRemotes: ' + name);
      console.log('setRemotes: ' + newUrl);
      const newRemotes = [...prevRemotes];
      const remoteIdx = newRemotes.findIndex((r) => r.name === name);
      if (remoteIdx > -1 || newRemotes[remoteIdx].url === '') {
        newRemotes[remoteIdx].url = newUrl;
      }
      storeRemotes(newRemotes);
      return newRemotes;
    });
  };
  const RemotesCtx: Remotes = {
    remotes,
    updateRemoteUrl,
  };
  return <RemotesContext.Provider value={RemotesCtx}>{children}</RemotesContext.Provider>;
};
export default RemotesProvider;

export const useRemotes = (): [Remote[], (name: string, newUrl: string) => void] => {
  const { remotes, updateRemoteUrl } = useContext(RemotesContext);
  return [remotes, updateRemoteUrl];
};
