import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import initializers from 'src/modules/initializers';
import createRootReducer from 'src/modules/reducers';

const history = createBrowserHistory();

const store = reduxConfigureStore({
  reducer: createRootReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }),
});

for (const initializer of initializers) {
  initializer(store);
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function configureStore(preloadedState?: Partial<RootState>) {
  return store;
}

export function getHistory() {
  return history;
}

export function getStore() {
  return store;
}

export default store;
