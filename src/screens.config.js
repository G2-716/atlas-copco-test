import { Screen1 } from "./components/screens/Screen1";
import { Screen2 } from "./components/screens/Screen2";
import { Screen3 } from "./components/screens/Screen3";
import { Screen4 } from "./components/screens/Screen4";
import { Screen5 } from "./components/screens/Screen5";
import { Screen6 } from "./components/screens/Screen6";
import { Screen7 } from "./components/screens/Screen7";
import { Screen8 } from "./components/screens/Screen8";
import { Screen9 } from "./components/screens/Screen9";
import { Screen10 } from "./components/screens/Screen10";
import { Screen40 } from "./components/screens/Screen40";
import { Screen41 } from "./components/screens/Screen41";
import { Screen42 } from "./components/screens/Screen42";
import { Screen11 } from './components/screens/Screen11';

export const screens = [
    {
        component: Screen1,
        preloadImages: [],
    },
    {
        component: Screen2,
        preloadImages: [],
    },
    {
        component: Screen3,
        preloadImages: [],
    },
    {
        component: Screen4,
        preloadImages: [],
    },
    ({ wait }) => wait ? ([
        {
            component: Screen5,
            preloadImages: [],
        },
        {
            component: Screen6,
            preloadImages: [],
        },
        {
            component: Screen8,
            preloadImages: [],
        },
    ]) : ([
        {
            component: Screen7,
            preloadImages: [],
        },
        {
            component: Screen9,
            preloadImages: [],
        },
    ]),
    {
        component: Screen10,
        preloadImages: [],
    },
    {
        component: Screen11,
        preloadImages: [],
    },
    {
        component: Screen40,
        preloadImages: [],
    },
    {
        component: Screen41,
        preloadImages: [],
    },
    {
        component: Screen42,
        preloadImages: [],
    },
];
