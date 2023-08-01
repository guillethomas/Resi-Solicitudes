import { configureStore } from "@reduxjs/toolkit";
import solicitudesReducer from './solicitudes/solicitudes.slice'

export const store = configureStore({
    reducer: {
        solicitudes: solicitudesReducer,
    }
    
})