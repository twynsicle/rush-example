import React, { FC } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { useRemotes } from './Remotes';
import { findRemoteUrl } from './findRemoteUrl';
import { loadComponent } from './loadComponent';

type Props = {
  fallback?: string | React.ReactNode;
  remote: string;
  component: string;
  scope?: string;
  [key: string]: any;
};

const RemoteComponent: FC<Props> = ({
  remote,
  component,
  scope = 'default',
  fallback = null,
  ...props
}) => {
  const [remotes] = useRemotes();
  const remoteUrl = findRemoteUrl(remote, remotes);

  if (!remoteUrl) {
    return <div>url not provided yet</div>;
  }

  const Component = React.lazy(loadComponent(remote, remoteUrl, `./${component}`, scope));
  return (
    // <ErrorBoundary>
    <React.Suspense fallback={fallback}>
      <Component {...props} />
    </React.Suspense>
    // </ErrorBoundary>
  );
};

export default RemoteComponent;
