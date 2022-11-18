import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import productReducer from "./product";
import categoryReducer from "./category";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
