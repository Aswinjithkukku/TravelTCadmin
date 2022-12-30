import { configureStore } from '@reduxjs/toolkit';

import {
    footerReducer,
    userReducer,
    categoryReducer,
} from './slices';

export const store = configureStore({
    reducer: {
        footer: footerReducer,
        user: userReducer,
        category: categoryReducer,
    },
    devTools: true,
});