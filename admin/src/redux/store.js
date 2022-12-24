import { configureStore } from '@reduxjs/toolkit';

import {
} from './slices';

export const store = configureStore({
    reducer: {
    },
    devTools: true,
});