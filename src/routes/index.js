//@flow
import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import UserPanelRoute from './UserPanel';
import ErrorBoundary from 'components/shared/ErrorBoundary';

const MediaBrowserPage = React.lazy(() => import('pages/MediaBrowser'));

const Routes = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <UserPanelRoute exact path="/" component={MediaBrowserPage} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
