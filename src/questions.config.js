import {
    correct7, incorrect7, correctCompany,
    incorrectCompany, incorrectAge, correctAge, peoplePhone, socialGreen, socialYellow, socialRed
} from './constants/images';

export const questions = [
    {
        id: '1',
        title: () => `Что ж, начнем с простого!`,
        text: ({ name }) => `Как думаете, ${name}, сколько будет 7% от 7?`,
        time: 10,
        correctPic: correct7,
        incorrectPic: incorrect7,
        answers: [
            {
                id: '1',
                text: '0,49',
                isCorrect: true
            },
            {
                id: '2',
                text: '0,047',
                isCorrect: false
            },
            {
                id: '3',
                text: '0,049',
                isCorrect: false
            },
            {
                id: '4',
                text: '4,9',
                isCorrect: false
            }
        ],
    },
    {
        id: '2',
        title: ({ name }) => `Вы отлично держитесь, ${name}!`,
        text: () => `Вы же изучили нашу компанию до собеседования?`,
        correctPic: correctCompany,
        incorrectPic: incorrectCompany,
        answers: [
            {
                id: '1',
                text: 'Да, конечно',
                isCorrect: true
            },
            {
                id: '2',
                text: 'Только описание вакансии...',
                isCorrect: false
            },
        ],
    },
    {
        id: '3',
        min: 5,
        max: 150,
        correctPic: correctAge,
        incorrectPic: incorrectAge,
        title: ({ name })=> `Мы зададим вам вопрос, ${name}, точных чисел не просим, постарайтесь попасть в правильную область ответа.`,
        text: () => 'Сколько лет Atlas Copco в мире?',
        answers: [
            {
                id: '1',
                min: 5,
                max: 144,
                isCorrect: false,
            },
            {
                id: '2',
                min: 145,
                max: 150,
                isCorrect: true,
            },
        ]
    },
    {
        id: '4',
        time: 15,
        text: () => 'Как думаете, почему крышка люка круглая?',
        answers: [
            {
                id: '1',
                text: 'Так рабочие не поранят себя об углы, когда будут чинить канализацию',
                isCorrect: false
            },
            {
                id: '2',
                text: 'Думаю, это просто случайность',
                isCorrect: false
            },
            {
                id: '3',
                text: 'Чтобы крышка в люк не провалилась',
                isCorrect: false
            },
            {
                id: '4',
                text: 'Почему дырки в одежде круглые? Потому так всегда и происходит. Дырки — круглые.',
                isCorrect: true
            },
        ],
    },
    {
        id: '5',
        min: 1,
        max: 15,
        title: () => 'Интересный вариант ответа. Поговорим о вас.',
        text: () => 'Сколько часов в день у вас уходит на соцсети?',
        answers: [
            {
                id: '1',
                min: 1,
                max: 6,
                isCorrect: true,
                color: '#42CC58',
                afterText: () => 'Это приемлемо!\n\nПодпишитесь\nна наши ресурсы?',
                picture: socialGreen,
            },
            {
                id: '2',
                min: 7,
                max: 13,
                isCorrect: true,
                color: '#FFC700',
                afterText: () => 'У вас, должно быть\nмного друзей! :)',
                picture: socialYellow,
            },
            {
                id: '3',
                min: 14,
                max: 15,
                isCorrect: true,
                color: '#FF0000',
                afterText: ({ name }) => `Когда же вы спите,\n${name}?`,
                picture: socialRed,
            },
        ],
    },
    {
        id: '6',
        correctPic: peoplePhone,
        title: ({ name }) => `${name}, нестандартный вопрос :)`,
        text: () => `Вы сова или жаворонок?`,
        answers: [
            {
                id: '1',
                text: 'Я точно сова!',
                isCorrect: true,
                afterText: () => 'Это здорово!\n\nХорошее качество\nдля работы с клиентами\nв других часовых поясах :)',
            },
            {
                id: '2',
                text: 'Жаворонок, утро – лучшее время суток',
                isCorrect: true,
                afterText: () => 'Отлично!\n\nВы сможете\nоптимально работать\nв своем часовом поясе',
            },
            {
                id: '3',
                text: 'По настроению :) Да и раз на раз не приходится',
                isCorrect: true,
                afterText: () => 'Внутренняя мобильность –\nэто хорошо!\n\nЗначит, вы сможете подстраиваться под текущие задачи и ритм жизни :)',
            },
        ],
    },
    {
        id: '7',
        type: 'game',
        time: 60,
    },
];