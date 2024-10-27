import { configureStore } from "@reduxjs/toolkit";


import { roomsApi } from "./services/roomsApi";
import { reservedInfoApi } from "./services/reservedInfoApi";
import{foodsApi} from "./services/foodsApi";
import { customersApi } from "./services/cusomersApi";

const customStore = configureStore({
  reducer: {

    [roomsApi.reducerPath]:roomsApi.reducer,
    [foodsApi.reducerPath]:foodsApi.reducer,
    [reservedInfoApi.reducerPath]:reservedInfoApi.reducer,
    [customersApi.reducerPath]:customersApi.reducer,
    // [specialRoomsApi.reducerPath]:specialRoomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
     
      .concat(roomsApi.middleware)
      .concat(foodsApi.middleware)
      .concat(reservedInfoApi.middleware)
      .concat(customersApi.middleware)
      // .concat(specialRoomsApi.middleware)
});

export default customStore;
