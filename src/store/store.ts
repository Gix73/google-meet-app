import { configureStore } from "@reduxjs/toolkit";
import { clientReducer } from "./reducer";

export default configureStore({
  reducer: { client: clientReducer },
});
