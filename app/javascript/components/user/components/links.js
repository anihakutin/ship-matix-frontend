import React from 'react';
import { Anchor } from "grommet"
import { withRouter } from "react-router";

const RouterAnchorBase = (props) => {
  return <Anchor {...props} onClick={() => props.history.push(props.path)} />;
};

export const RouterAnchor = withRouter(RouterAnchorBase);
