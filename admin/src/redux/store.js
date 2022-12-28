import { configureStore } from '@reduxjs/toolkit';

import {
    footerReducer
} from './slices';

export const store = configureStore({
    reducer: {
        footer: footerReducer
    },
    devTools: true,
});