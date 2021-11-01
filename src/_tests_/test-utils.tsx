import React, { ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import mainPageReducer from "../pages/mainPageSlice";
import userReducer from "../components/login/loginslice"



/**
 * A custom render method that includes data stores to be used in the components test
 * @param ui Element to render
 * @param renderOptions  optional renderoptions 
 * @param store global store
 * @returns 
 */
const render = (ui: ReactElement, renderOptions?: RenderOptions, store = configureStore({ reducer: {mainPageReducer, userReducer} })) => {
    const Wrapper : React.FC = ({ children }) => {
      return (
        <Provider store={store}>
              {children}

        </Provider>
      );
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  };
  
  // re-export everything
  export * from "@testing-library/react";
  
  // override render method
  export { render };
  