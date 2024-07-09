'use client';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const RouterContext = createContext();

export function useRouterContext() {
  return useContext(RouterContext);
}

export function RouterProvider({ children }) {
  const [router, setRouter] = useState('/');

  return (
    <RouterContext.Provider value={{ router, setRouter }}>
      {children}
    </RouterContext.Provider>
  );
}

RouterProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
