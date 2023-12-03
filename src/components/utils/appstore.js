import { configureStore } from "@reduxjs/toolkit";
import Dataslice from "./Dataslice";

const Store = configureStore({
  reducer: {
    data: Dataslice,
  },
});

export default Store;
