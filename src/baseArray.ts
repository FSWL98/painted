import { Lesson } from './types/types';

export const tags = {
    nature: 'Природа',
    human: 'Люди',
    animal: 'Животные',
    fall: 'Осень',
    winter: 'Зима',
    spring: 'Весна',
    summer: 'Лето',
    sea: 'Море',
    architecture: 'Архитектура',
    food: 'Еда',
    life: 'Натюрморт'
}

export const baseArray : Lesson[] = [
    {
        id: 1,
        name: 'bungalo',
        title: 'Бунгало',
        videos: ['bungalo.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['sea', 'architecture', 'nature', 'summer']
    },
    {
        id: 2,
        name: 'cake',
        title: 'Пирожное',
        videos: ['cake.m3u8', 'cake2.m3u8'],
        references: ['reference.png'],
        results: ['result.png'],
        tags: ['food', 'life']
    },
    {
        id: 3,
        name: 'cat_with_blanket',
        title: 'Кот в одеяле',
        videos: ['cat_with_blanket.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['animal']
    },
    {
        id: 4,
        name: 'child_and_duck',
        title: 'Ребенок и утка',
        videos: ['child_and_duck.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['human', 'animal', 'nature', 'fall']
    },
    {
        id: 5,
        name: 'christmas_candle',
        title: 'Рождественнская свеча',
        videos: ['christmas_candle.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['winter', 'life']
    },
    {
        id: 6,
        name: 'corgi',
        title: 'Корги',
        videos: ['corgi.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['animal']
    },
    {
        id: 7,
        name: 'country_mountain',
        title: 'Пейзаж',
        videos: ['country_mountains.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['summer', 'architecture', 'nature']
    },
    {
        id: 8,
        name: 'english_breakfast',
        title: 'Английский завтрак',
        videos: ['english_breakfast.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['food', 'life']
    },
    {
        id: 9,
        name: 'field',
        title: 'Пейзаж',
        videos: ['field.m3u8', 'field2.m3u8', 'field3.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.png'],
        tags: ['nature', 'summer']
    },
    {
        id: 10,
        name: 'fish',
        title: 'Рыбы',
        videos: ['fish.m3u8', 'fish2.m3u8', 'fish3.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['sea', 'animal']
    },
    {
        id: 11,
        name: 'flashlight',
        title: 'Фонарь',
        videos: ['flashlight.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['life']
    },
    {
        id: 12,
        name: 'fruits',
        title: 'Фрукты',
        videos: ['fruits.m3u8', 'fruits2.m3u8'],
        references: ['avocado_reference.jpeg', 'banana_reference.jpeg', 'coconaut_reference.jpeg', 'dragonfruit_reference.jpeg',
        'pineapple_reference.jpeg', 'pomegranate_reference.png'],
        results: ['avocado_result.jpeg', 'banana_result.jpeg', 'coconaut_result.jpeg', 'dragonfruit_result.png',
            'pineapple_result.jpeg', 'pomegranate_result.jpeg'],
        tags: ['food', 'life', 'nature']
    },
    {
        id: 13,
        name: 'georgian_mountains',
        title: 'Горы Грузии',
        videos: ['georgian_mountains.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'summer']
    },
    {
        id: 14,
        name: 'georgians',
        title: 'Грузинский танец',
        videos: ['georgians.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'summer', 'human']
    },
    {
        id: 15,
        name: 'ginger_biscuit',
        title: 'Ибирный пряник',
        videos: ['ginger_biscuit.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['life', 'food', 'winter']
    },
    {
        id: 16,
        name: 'girl_in_sunflowers',
        title: 'Девушка в подсолнухах',
        videos: ['girl_in_sunflowers.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'human', 'summer']
    },
    {
        id: 17,
        name: 'gvardeec',
        title: 'Гвардеец',
        videos: ['gvardeec.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['human', 'fall']
    },
    {
        id: 18,
        name: 'hedgehog',
        title: 'Ёжик',
        videos: ['hedgehog.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['animal', 'fall']
    },
    {
        id: 19,
        name: 'hinkali',
        title: 'Хинкали',
        videos: ['hinkali.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['food', 'life']
    },
    {
        id: 20,
        name: 'house',
        title: 'Дом',
        videos: ['house.m3u8', 'house2.m3u8'],
        references: ['house.jpeg'],
        results: ['result.jpeg'],
        tags: ['architecture', 'fall']
    },
    {
        id: 21,
        name: 'kings_corgi',
        title: 'Королевская корги',
        videos: ['kings_corgi.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['animal']
    },
    {
        id: 22,
        name: 'medusa',
        title: 'Медуза',
        videos: ['medusa.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['sea', 'animal']
    },
    {
        id: 23,
        name: 'miso',
        title: 'Мисо суп',
        videos: ['miso.m3u8', 'miso2.m3u8', 'miso3.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.png'],
        tags: ['good', 'life']
    },
    {
        id: 24,
        name: 'mountains',
        title: 'Горный пейзаж',
        videos: ['mountains.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'fall']
    },
    {
        id: 25,
        name: 'mushrooms',
        title: 'Грибы в корзинке',
        videos: ['mushrooms.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'fall', 'food']
    },
    {
        id: 26,
        name: 'nature',
        title: 'Пейзаж',
        videos: ['nature.m3u8', 'nature2.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'summer']
    },
    {
        id: 27,
        name: 'night_sea',
        title: 'Ночное море',
        videos: ['night_sea.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['sea', 'nature', 'summer']
    },
    {
        id: 28,
        name: 'northlight',
        title: 'Северное сияние',
        videos: ['northlight.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'winter']
    },
    {
        id: 29,
        name: 'parrot',
        title: 'Попугай',
        videos: ['parrot.m3u8', 'parrot2.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['animal']
    },
    {
        id: 30,
        name: 'pavilion',
        title: 'Беседка Сеула',
        videos: ['pavilion.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'architecture', 'fall']
    },
    {
        id: 31,
        name: 'phone_station',
        title: 'Телефонная будка',
        videos: ['phone_station.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['fall', 'architecture']
    },
    {
        id: 32,
        name: 'polar_bear',
        title: 'Белые медведи',
        videos: ['polar_bear.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['animal', 'winter']
    },
    {
        id: 33,
        name: 'pomegranate',
        title: 'Гранат',
        videos: ['pomegranate.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'food', 'summer']
    },
    {
        id: 34,
        name: 'portrait',
        title: 'Портрет',
        videos: ['portrait.m3u8', 'portrait2.m3u8'],
        references: ['reference.png'],
        results: ['result.jpeg'],
        tags: ['human']
    },
    {
        id: 35,
        name: 'rain',
        title: 'Фонарь',
        videos: ['rain.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'fall']
    },
    {
        id: 36,
        name: 'roses',
        title: 'Розы в вазе',
        videos: ['roses.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'life']
    },
    {
        id: 37,
        name: 'sandwich',
        title: 'Сэндвич',
        videos: ['sandwich.m3u8'],
        references: ['sandwich_reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['food', 'life']
    },
    {
        id: 38,
        name: 'scetching',
        title: 'Чайник',
        videos: ['scetching1.m3u8'],
        references: ['scetching_reference.jpeg'],
        results: ['scetching_result.jpeg'],
        tags: ['life']
    },
    {
        id: 39,
        name: 'snow_deer',
        title: 'Зимний олень',
        videos: ['snow_deer.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['winter', 'nature', 'animal']
    },
    {
        id: 40,
        name: 'snow_forest',
        title: 'Зимний лес',
        videos: ['snow_forest.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'winter']
    },
    {
        id: 41,
        name: 'snow_house',
        title: 'Снежный домик',
        videos: ['snow_house.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['winter', 'architecture']
    },
    {
        id: 42,
        name: 'strawberry_in_kettle',
        title: 'Натюрморт',
        videos: ['strawberry_in_kettle.m3u8', 'strawberry_in_kettle2.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['life']
    },
    {
        id: 43,
        name: 'surfing',
        title: 'Серфинг',
        videos: ['surfing.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['sea', 'summer', 'human']
    },
    {
        id: 44,
        name: 'uaz',
        title: 'УАЗик',
        videos: ['uaz.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['sea', 'summer']
    },
    {
        id: 45,
        name: 'walk_fields',
        title: 'Прогулка по лугам',
        videos: ['walk_fields.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['nature', 'animal', 'summer']
    },
    {
        id: 46,
        name: 'wine',
        title: 'Вино',
        videos: ['wine.m3u8'],
        references: ['reference.jpeg'],
        results: ['result.jpeg'],
        tags: ['life', 'food', 'summer']
    },
    {
        id: 47,
        name: 'vegetables',
        title: 'Овощи',
        videos: ['vegetables.m3u8', 'vegetables2.m3u8'],
        references: ['artichoke_reference.jpeg', 'bellpepper_reference.jpeg', 'carrot_reference.png',
        'corn_reference.jpeg', 'pumpkin_reference.jpeg', 'tomato_reference.jpeg'],
        results: ['artichoke_result.jpeg', 'bellpepper_result.jpeg', 'carrot_result.png',
            'corn_result.jpeg', 'pumpkin_result.png', 'tomato_result.png'],
        tags: ['life', 'food']
    }
]