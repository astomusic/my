import React from 'react';
import ReactDOM from 'react-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import { Provider } from 'react-redux';
// import { applyMiddleware, compose, createStore } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';

import App from './components/App';
// import rootReducer, { rootEpic } from './store';

const dev = process.env.NODE_ENV !== 'production';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = dev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
// const epicMiddleware = createEpicMiddleware();

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(epicMiddleware), composeEnhancers()),
// );

// epicMiddleware.run(rootEpic);

// Sentry.init({
//   dsn: '',
//   autoSessionTracking: true,
//   integrations: [new Integrations.BrowserTracing()],
//   release: `lucy@${process.env.VERSION}`,
//   environment: process.env.NODE_ENV,
//   tracesSampleRate: 1.0,
// });

// ReactDOM.render(
//   <Sentry.ErrorBoundary fallback={'An error has occurred'}>
//     <HelmetProvider>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </HelmetProvider>,
//   </Sentry.ErrorBoundary>,
//   document.getElementById('root'),
// );

ReactDOM.render(<App />, document.getElementById('root'),);
