import React, { useReducer } from 'react';
import './App.css';
import { e, r } from './__pages/incoming';
import PageRouter from './__pages/__PageRouter';

function App() {
  const [state_settings, dispatch_settings] = useReducer(r.settings.reducer, r.settings.initialState);

  return (
    <div > 
      <r.settings.StateContext.Provider value={state_settings} >
        <r.settings.DispatchContext.Provider value={dispatch_settings}>
          <PageRouter />
        </r.settings.DispatchContext.Provider>
      </r.settings.StateContext.Provider>
    </div>
  );
}

export default App;
