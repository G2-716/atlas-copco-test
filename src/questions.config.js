export const QUESTIONS_TYPES = {
    Range: 'range',
    Game: 'game',
    OneAnswer: 'oneAnswer',
    TimeAnswer: 'timeAnswer',
}

export const questions = [
    {
        id: '1',
        text: (name)=> `Что ж, начнем с простого! Как думаете, ${name}, сколько будет 7% от 7?`,
        time: 7,
        type: QUESTIONS_TYPES.TimeAnswer,
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
        text: (name)=> {return `Вы отлично держитесь, ${name}! Вы же изучили нашу компанию до собеседования?`},
        type: QUESTIONS_TYPES.OneAnswer,
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
        type: QUESTIONS_TYPES.Range,
        min: 5,
        max: 150,
        title: (name)=> `Мы зададим вам вопрос, ${name}, точных чисел не просим, постарайтесь попасть в правильную область ответа.`,
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
        type: QUESTIONS_TYPES.OneAnswer,
        text: () => 'Почему крышка люка круглая?',
        answers: [
            {
                id: '1',
                text: 'Так рабочие не поранят себя об углы, когда будут чинить канализацию',
                isCorrect: true
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
                isCorrect: false
            },
        ],
    },
    {
        id: '5',
        type: QUESTIONS_TYPES.Range,
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
        type: QUESTIONS_TYPES.OneAnswer,
        title: (name) => `${name}, с чем вы себя ассоциируете? Пожалуйста, не смейтесь. Нам важно узнать о вас больше`,
        text: (name)=> `${name}, нестандартный вопрос :) Вы сова или жаворонок?`,
        answers: [
            {
                id: '1',
                text: 'Я точно сова!',
                isCorrect: true,
                afterText: () => 'Это здорово! Хорошее качество для работы с клиентами в других часовых поясах :)',

            },
            {
                id: '2',
                text: 'Жаворонок, утро – лучшее время суток',
                isCorrect: true,
                afterText: () => 'Отлично! Вы сможете оптимально работать в своем часовом поясе',
            },
            {
                id: '3',
                text: 'По настроению :) Да и раз на раз не приходится',
                isCorrect: true,
                afterText: () => 'Внутренняя мобильность – это хорошо! Значит, вы сможете подстраиваться под текущие задачи и ритм жизни :)',
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