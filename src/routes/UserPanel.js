//@flow
import React from 'react';
import type { AbstractComponent } from 'react';

import { Route } from 'react-router-dom';
import UserPanelLayout from 'components/layout/UserPanel';

type Props = {
  component: AbstractComponent<*>,
};

const UserPanelRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={props => (
        <UserPanelLayout>
          <Component {...props} />
        </UserPanelLayout>
      )}
    />
  );
};

export default UserPanelRoute;
