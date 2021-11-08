import {
    correct7, incorrect7, correctCompany,
    incorrectCompany, incorrectAge, correctAge, peoplePhone, socialGreen, socialYellow, socialRed
} from './constants/images';

export const questions = [
    {
        id: '1',
        title: () => `Что ж, начнем с простого!`,
        text: ({ user }) => `Как думаете, ${user?.name}, сколько будет 7% от 7?`,
        time: 7,
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
        title: () => ({ user }) => `Вы отлично держитесь, ${user?.name}!`,
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
        title: ({ user })=> `Мы зададим вам вопрос, ${user?.name}, точных чисел не просим, постарайтесь попасть в правильную область ответа.`,
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
        time: 7,
        text: () => 'Как думаете, почему крышка люка круглая?',
        answers: [
            {
                id: '1',
                text: 'Так рабочие не поранят себя об углы, когда будут чинить канализацию',
                isCorrect: true
            },
            {
                id: '2',
                text: 'Думаю, это просто случайность',
                isCorrect: true
            },
            {
                id: '3',
                text: 'Чтобы крышка в люк не провалилась',
                isCorrect: true
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
        text: () => 'Сколько времени в день у вас уходит на соцсети?',
        answers: [
            {
                id: '1',
                min: 1,
                max: 6,
                isCorrect: true,
                afterText: () => 'Это приемлемо! Подпишитесь на наши ресурсы?',
            },
            {
                id: '2',
                min: 7,
                max: 13,
                isCorrect: true,
                afterText: () => 'У вас, должно быть много друзей! :)',
            },
            {
                id: '3',
                min: 14,
                max: 15,
                isCorrect: true,
                afterText: (name) => `Когда же вы спите, ${name}?`,

            },
        ],
    },
    {
        id: '6',
        correctPic: peoplePhone,
        title: (name) => `${name}, с чем вы себя ассоциируете? Пожалуйста, не смейтесь. Нам важно узнать о вас больше`,
        text: (name)=> `${name}, нестандартный вопрос :) Вы сова или жаворонок?`,
        answers: [
            {
                id: '1',
                text: 'Я точно сова!',
                isCorrect: true,
                afterText: () => 'Это здорово! Хорошее качество для работы с клиентами в других часовых поясах :)',
                picture: socialGreen,
            },
            {
                id: '2',
                text: 'Жаворонок, утро – лучшее время суток',
                isCorrect: true,
                afterText: () => 'Отлично! Вы сможете оптимально работать в своем часовом поясе',
                picture: socialYellow,
            },
            {
                id: '3',
                text: 'По настроению :) Да и раз на раз не приходится',
                isCorrect: true,
                afterText: () => 'Внутренняя мобильность – это хорошо! Значит, вы сможете подстраиваться под текущие задачи и ритм жизни :)',
                picture: socialRed
            },
        ],
    },
    {
        id: '7',
        type: 'game',
        time: 40,
        text: `Нам очень важно, чтобы в нашей компании люди дружили не только между собой, но и с логикой. Мы выложим фигуру из ручек. Вам нужно переложить ручки так, чтобы получилось 11 квадратов.\nИмейте в виду, что задача на время, у вас две попытки. Желаем удачи!)`,
        answers: [
            {
                id: '1',
                text: 'Пройдено',
                isCorrect: true
            },
            {
                id: '2',
                text: 'Не пройдено',
                isCorrect: false
            },
        ],
    },
];