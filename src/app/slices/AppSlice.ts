import { createSlice } from "@reduxjs/toolkit";
import { AppInitialState } from "../../utils/Types";

const initialState : AppInitialState = {};

export const AppSlice = createSlice({
    name: "app",
    initialState ,
    reducers: {},
});

export const {} = AppSlice.actions;