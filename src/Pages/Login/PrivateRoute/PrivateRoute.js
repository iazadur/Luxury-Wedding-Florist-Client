import { css } from "@emotion/react";
import { Box } from "@mui/material";
import HashLoader from "react-spinners/HashLoader";
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function PrivateRoute({ children, ...rest }) {
    const {user,isLoading} = useAuth()
    if (isLoading) {
        return (<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", height: "100vh" }} >
        <HashLoader color="#EC5990" css={override} size={100} />
    </Box>)
    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
        user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;