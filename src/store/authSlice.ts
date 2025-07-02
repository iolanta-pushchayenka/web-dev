import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
    email: string;
    password: string;
    isAuthenticated: boolean;
    isRegistering: boolean;
}

const initialState: AuthState = {
    email: '',
    password: '',
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    isRegistering: false
   // isAuthenticated: false,

};

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },

        setPassword(state, action: PayloadAction<string>)  {
            state.password = action.payload;
        },

        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
             localStorage.setItem("isAuthenticated", String(action.payload));
        },

        setIsRegistering(state, action: PayloadAction<boolean>) {
            state.isRegistering = action.payload;
          },

        clearData(state) {
            state.email = '';
            state.password = '';
        },
    },
});

export const { setEmail, setPassword, clearData, setIsAuthenticated, setIsRegistering } = authSlice.actions;
export default authSlice.reducer;
