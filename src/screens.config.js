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
import { Screen11 } from './components/screens/Screen11';
import { Screen12 } from './components/screens/Screen12';
import { Screen13 } from './components/screens/Screen13';
import { Screen14 } from './components/screens/Screen14';
import { Screen15 } from './components/screens/Screen15';
import { Screen16 } from './components/screens/Screen16';
import { Screen17 } from './components/screens/Screen17';
import { Screen40 } from "./components/screens/Screen40";
import { Screen41 } from "./components/screens/Screen41";
import { Screen42 } from "./components/screens/Screen42";
import {
    coffeeMan,
    coffeeWoman,
    companyPeople,
    correctAge, dialog,
    elevatorMan,
    elevatorManThankful,
    helloPeople,
    incorrectAge, peopleBb,
    peopleFlying,
    peopleLightning, peoplePhone,
    peopleRocket,
    peopleThinking, phoneCall,
    socialGreen,
    socialRed,
    socialYellow,
    womanTalking
} from './constants/images';

export const screens = [
    {
        component: Screen1,
        preloadImages: [womanTalking],
    },
    {
        component: Screen2,
        preloadImages: [],
    },
    {
        component: Screen3,
        preloadImages: [elevatorMan],
    },
    {
        component: Screen4,
        preloadImages: [elevatorManThankful, coffeeWoman],
    },
    ({ wait }) => wait ? ([
        {
            component: Screen5,
            preloadImages: [],
        },
        {
            component: Screen6,
            preloadImages: [coffeeMan],
        },
        {
            component: Screen8,
            preloadImages: [helloPeople],
        },
    ]) : ([
        {
            component: Screen7,
            preloadImages: [coffeeMan],
        },
        {
            component: Screen9,
            preloadImages: [helloPeople],
        },
    ]),
    {
        component: Screen10,
        preloadImages: [],
    },
    {
        component: Screen11,
        preloadImages: [companyPeople],
    },
    {
        component: Screen12,
        preloadImages: [peopleRocket, correctAge, incorrectAge],
    },
    {
        component: Screen13,
        preloadImages: [peopleThinking],
    },
    {
        component: Screen14,
        preloadImages: [peopleLightning, socialGreen, socialRed, socialYellow],
    },
    {
        component: Screen15,
        preloadImages: [peopleFlying],
    },
    {
        component: Screen16,
        preloadImages: [peoplePhone],
    },
    {
        component: Screen17,
        preloadImages: [],
    },
    {
        component: Screen40,
        preloadImages: [dialog, peopleBb],
    },
    {
        component: Screen41,
        preloadImages: [phoneCall],
    },
    {
        component: Screen42,
        preloadImages: [],
    },
];
