import {IntroScreen1} from "./components/screens/IntroScreen1";
import {IntroScreen2} from "./components/screens/IntroScreen2";
import {ElevatorTask} from "./components/screens/ElevatorTask";
import {ElevatorTaskResult} from "./components/screens/ElevatorTaskResult";
import {Meeting} from "./components/screens/Meeting";
import {SevenTask} from "./components/screens/SevenTask";
import {CompanyQuestion} from "./components/screens/CompanyQuestion";
import {AgeTask} from "./components/screens/AgeTask";
import {ReadyQuestion} from "./components/screens/ReadyQuestion";
import {HatchQuestion} from "./components/screens/HatchQuestion";
import {SocialNetWorkQuestion} from "./components/screens/SocialNetworkQuestion";
import {PersonalQuestion} from "./components/screens/PersonalQuestion";
import {Final} from "./components/screens/Final";
import {InterviewFinal} from "./components/screens/InterviewFinal";
import {MatchTask} from "./components/screens/MatchTask";

export const ScreenType = {
    Intro: 'intro',
    Task: 'task',
    Question: 'question',
    Final: 'final',
    Loading: 'loading',
};

export const INTERVIEW_SCREEN_ID = 5;

export const SEX_TYPES = {
    Male: 'male',
    Female: 'female'
}

export const screens = [
    {
        name: 'intro-1',
        component: IntroScreen1,
        type: ScreenType.Intro,
        preloadImages: [],
    },
    {
        name: 'intro-2',
        component: IntroScreen2,
        type: ScreenType.Intro,
        preloadImages: [],
        image: []
    },
    {
        name: 'task-1-1',
        component: ElevatorTask,
        type: ScreenType.Task,
        preloadImages: [],
        image: []
    },
    {
        name: 'task-1-2',
        component: ElevatorTaskResult,
        type: ScreenType.Task,
        preloadImages: [],
        image: []
    },
    {
        name: 'intro-3',
        component: Meeting,
        type: ScreenType.Intro,
        preloadImages: [],
        image: [],
    },
    {
        name: 'question-1',
        component: SevenTask,
        type: ScreenType.Question,
        preloadImages: [],
        image: [],
    },
    {
        name: 'question-2',
        component: CompanyQuestion,
        type: ScreenType.Question,
        preloadImages: [],
        image: [],
    },
    {
        name: 'task-2',
        component: AgeTask,
        type: ScreenType.Task,
        preloadImages: [],
        image: [],
    },
    {
        name: 'question-3-1',
        component: ReadyQuestion,
        type: ScreenType.Question,
        preloadImages: [],
        image: [],
    },
    {
        name: 'question-3-2',
        component: HatchQuestion,
        type: ScreenType.Question,
        preloadImages: [],
        image: [],
    },
    {
        name: 'question-4',
        component: SocialNetWorkQuestion,
        type: ScreenType.Question,
        preloadImages: [],
        image: [],
    },
    {
        name: 'question-5',
        component: PersonalQuestion,
        type: ScreenType.Question,
    },
    {
        name: 'task-3',
        component: MatchTask,
        type: ScreenType.Task,
    },
    {
        name: 'final-1',
        component: InterviewFinal,
        type: ScreenType.Final,
    },
    {
        name: 'final-2',
        component: Final,
        type: ScreenType.Final,
    },
];