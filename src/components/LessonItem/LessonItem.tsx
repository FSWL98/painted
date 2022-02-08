import React from 'react';
import { Lesson } from '../../types/types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from 'react-router-dom';

import './LessonItem.scss';

const LessonItem = ({ lesson } : { lesson: Lesson }) => {

    return (
        <div className="LessonItem">
            <span className="LessonItem-title">
                { lesson.title }
                {/*<FontAwesomeIcon icon={ faStar } />*/}
                {/*<FontAwesomeIcon icon='star' />*/}
            </span>
            <Carousel showThumbs={false} showArrows infiniteLoop>
                {lesson.references.map((el : string) => {
                    const logo = require(`../../assets/${lesson.name}/${el}`);
                    return <img src={logo} alt={lesson.name} key={el} className="carousel-image" />;
                })}
            </Carousel>
            <Link to={`lesson/${lesson.id}`} className="LessonItem-link">Подробнее</Link>
        </div>
    );
};

export default LessonItem;