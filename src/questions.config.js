import { AnswerType } from './answerTypes.config';

export const questions = [
    {
        id: '1',
        text: 'Если у тебя есть возможность стать чемпионом в одном виде спорта, какой ты бы выбрал?',
        answers: [
            {
                id: '1',
                text: 'Шахматы. Да-да, это спорт!',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Сноуборд/Лыжи',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Бокс',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Конный спорт',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Плавание',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '2',
        text: 'Представь, что в 5 утра тебе звонит староста/руководитель. Как думаешь, что случилось?',
        answers: [
            {
                id: '1',
                text: 'Он понял, как решить задачу, с которой никто не справился, теперь звонит всем, рассказывает',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Не может уснуть, хочет с тобой поговорить',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Какая разница, что случилось?! Я хочу спать!',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Точно случилось что-то чрезвычайно важное, иначе бы не набирал',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Меня точно выгнали из университета/с работы!',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '3',
        text: 'Ты пришел в офис, а там весь день пожарные учения. Что будешь делать?',
        answers: [
            {
                id: '1',
                text: 'А что, работать надо обязательно в офисе?',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Пойду с коллегами гулять',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Давно хотел сходить на выставку недалеко от работы',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Досмотрю свой сон дома',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Пойду есть в соседнем кафе',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '4',
        text: 'Что тебе больше нравится?',
        answers: [
            {
                id: '1',
                text: 'Отслеживать техническую сторону проекта',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Разрабатывать новые идеи',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Заниматься всем и сразу',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Управлять, координировать людей',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Помогать другим',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '5',
        text: 'В коллективе появился новый человек. Ты:',
        answers: [
            {
                id: '1',
                text: 'Я работаю',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Приду с пряниками знакомиться',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Напишу в общем чатике «вэлкам»',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Приглашу в бар в пятницу посидеть с коллегами',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Пересечемся по проекту – будем общаться. Нет – значит не судьба',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '6',
        text: 'Уже 6й вопрос. Надо подкрепиться. Что выберешь?',
        answers: [
            {
                id: '1',
                text: 'Пицца',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Запеченная рыба',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Бургер',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Японская кухня',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Домашняя еда',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '7',
        text: 'Надеюсь, тебе было вкусно, у нас тут следующий вопрос. Если офис, то:',
        answers: [
            {
                id: '1',
                text: 'Многоэтажное здание в центре города',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Просторный лофт рядом с парком',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Удалёнка, чтобы можно было работать из кроватки или кафе',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Что угодно, главное, в другой стране',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Необычный, современный, концептуальный',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '8',
        text: 'Переезжаешь, а из техники можно взять только 1 вещь. Какую?',
        answers: [
            {
                id: '1',
                text: 'Телевизор',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Холодильник',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Кофемашина',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Микроволновка',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Стиральная машина',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '9',
        text: 'В спорах ты обычно:',
        answers: [
            {
                id: '1',
                text: 'Пытаюсь быстрее закончить разговор, всё равно останусь при своём мнении',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Могу склонить людей на свою сторону',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Привожу доказательства графиками, цифрами и гуглом',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Я почти никогда ни с кем не спорю',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Готов принять другую точку зрения, если меня убедят',
                type: AnswerType.Purchases,
            },
        ],
    },
    {
        id: '10',
        text: 'Есть время почитать. Что возьмешь с полки?',
        answers: [
            {
                id: '1',
                text: 'Возьму энциклопедию по устройству механизмов, приборов, машин',
                type: AnswerType.Engineering,
            },
            {
                id: '2',
                text: 'Книжка по психологии явно ждёт меня',
                type: AnswerType.Sales,
            },
            {
                id: '3',
                text: 'Мой утренний New York Times принесли?',
                type: AnswerType.Finance,
            },
            {
                id: '4',
                text: 'Охотно читаю научно-популярную литературу и публицистику',
                type: AnswerType.ProjectOffice,
            },
            {
                id: '5',
                text: 'Вон ту, с самой красивой обложкой!',
                type: AnswerType.Purchases,
            },
        ],
    },
];