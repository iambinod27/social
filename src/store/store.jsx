import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import postReducer from "./features/posts/postSlice";
import friendReducer from "./features/friends/friendSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "main-root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  friend: friendReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { persistor };

export default store;
