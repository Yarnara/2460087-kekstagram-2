// Получение целого числа из переданного диапазона
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


// Описание фотографий
const descriptionsPhotos = {
  1: 'Нет людей — нет проблем!',
  2: 'На пляж — это туда.',
  3: 'Лазурное море, волшебное море, прекрасное море, хочу тебя понять...',
  4: 'Согласия на эту фотографию я не получал',
  5: 'Счастливы, потому что не знают, какая участь их ждет.',
  6: 'Эта машина такая черная, что даже солнцу стыдно светить на неё.',
  7: 'Типичный завтрак в отеле 5 звезд.',
  8: 'В этом напитке нет ничего, кроме надежд, разбитых в хлам!',
  9: 'Я пыталась его поймать, но он оказался быстрее.',
  10: 'Это мы у пляжников спёрли.',
  11: 'Поиграла с эстетикой. Проиграла',
  12: 'Продам гараж.',
  13: 'Рыба с огурцами: еда для тех, кто ненавидит себя и все вокруг!',
  14: 'Фото для истинных ценителей неуместного кулинарного юмора.',
  15: 'Вот гири к ним привяжу, соседи порадуются.',
  16: 'Здесь мы видим небесный лайнер на фоне… ничего!',
  17: 'Вам, наверное, интересно зачем я вас здесь собрал?',
  18: 'Встреча века: ретро машина, пережившая сотни стилей, и кирпичное здание, уставшее от жизни.',
  19: 'Иду к холодильнику в три часа ночи.',
  20: 'Вы когда-нибудь видели, как природа отыгралась на пальмах? Теперь видели.',
  21: 'Эта еда настолько невзрачна, что даже фотосессия не спасла!',
  22: 'Детям до 18 лет запрещено смотреть в левый угол фотографии.',
  23: 'Этот краб знает: лучше быть смешным, чем съеденным!',
  24: 'Забудь о музыке — послушай, как все вокруг шумят!',
  25: 'В последний раз видел такое на "Нашествии 2002"'
};

// Имена пользователей
const usernames = [
  'Шерлок Холмс',
  'Эркюль Пуаро',
  'Джеймс Бонд',
  'Лисбет Саландер',
  'Нэнси Дрю',
  'Квентин Тарантино',
  'Дик Трейси',
  'Инспектор Гаджет',
  'Кристофер Нолан',
  'Хантер С. Томпсон'
];

// Текст комментариев
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const photos = [];
const photoCount = 25; // количество фотографий
let commentIdCounter = 1; //Для отслеживания ID комментариев

for (let i = 1; i <= photoCount; i++) {
  const currentPhoto = {
    id: i,
    url: `photos/${i}.jpg`,
    description: descriptionsPhotos[i],
    likes: getRandomInteger(15, 200),
    comments: []
  };

  const numberOfComments = getRandomInteger(0, 30);
  for (let j = 0; j < numberOfComments; j++) {
    const currentComment = {
      id: commentIdCounter,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: messages[getRandomInteger(0, messages.length - 1)],
      name: usernames[getRandomInteger(0, usernames.length - 1)]
    };

    currentPhoto.comments.push(currentComment);
    commentIdCounter++;
  }
  photos.push(currentPhoto);
}
