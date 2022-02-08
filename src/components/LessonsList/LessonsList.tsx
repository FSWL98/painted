import React from 'react';

import { Lesson } from '../../types/types';
import LessonItem from '../LessonItem/LessonItem';

import './LessonList.scss';

const LessonList = ({ lessons } : { lessons: Lesson[]}) => {
    return (
        <div className="LessonList">
            {lessons.map((el : Lesson) => <LessonItem lesson={el} key={el.id} />)}
            {lessons.length === 0 && <div className="LessonList__empty">Не найдено ни одного урока</div>}
        </div>
    );
};

export default LessonList;