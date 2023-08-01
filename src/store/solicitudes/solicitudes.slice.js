import { createSlice } from "@reduxjs/toolkit";
import SOLICITUDES from '../../constants/data/solicitudesRotacion.json'

const initialState = {
    data: SOLICITUDES,
};

const solicitudesSlice = createSlice({
    name: "solicitudes",
    initialState,
    reducers:{},
})

export default solicitudesSlice.reducer;