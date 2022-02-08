import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { baseArray } from '../../baseArray';

import './LessonPage.scss';
import set = Reflect.set;
import Header from "../Header/Header";
import {Carousel} from "react-responsive-carousel";

const LessonPage = () => {
    const params = useParams();
    const lesson = baseArray[parseInt(params.id as string) - 1];
    const videos = lesson.videos.map((el: string) => {
        return require(`../../assets/${lesson.name}/${el}`);
    });

    const [modal, setModal] = useState({
        show: false,
        image: null,
    });

    const handleImageClick = (image: any) => {
        setModal({
            show: true,
            image,
        });
    };

    const closeModal = () => {
        setModal({
            show: false,
            image: null,
        });
    };

    const renderContainer = (props: any) => {
        if (document.body.clientWidth > 767) {
            return <div className="LessonPage-references_container" children={props} />
        }
        return <Carousel children={props} infiniteLoop showThumbs={false} dynamicHeight />
    };

    return (
        <>
        <div className="LessonPage">
            <div className={`modal ${modal.show ? 'opened' : 'closed'}`} onClick={closeModal}>
                <div className="modal-content">
                    <img src={modal.image || ''} alt='nothing' />
                </div>
            </div>
            <h1>{ lesson.title }</h1>
            <div className="LessonPage-videos">
                {videos.length === 1 && <div className="video-container">
                  <video className="video-js vjs-fluid vjs-default-skin" controls preload="auto"
                         id={videos[0]} data-setup='{}'>
                    <source src={videos[0]} type="application/x-mpegURL" />
                  </video>
                </div>}
                {videos.length > 1 && lesson.videos.map((el: string, index: number) => {
                    return <div key={el} className="video-container">
                        <h3>Часть {index + 1}</h3>
                        <video className="video-js vjs-fluid vjs-default-skin" controls preload="auto"
                               id={el} data-setup='{}'>
                            <source src={videos[index]} type="application/x-mpegURL" />
                        </video>
                    </div>
                })}
            </div>
            <div className="LessonPage-references">
                <h3>Референсы</h3>
                {renderContainer(lesson.references.map((el:string) => {
                        const image = require(`../../assets/${lesson.name}/${el}`);
                        return <img src={image} alt={el} className="reference" onClick={() => handleImageClick(image)} />
                    }))}
            </div>
            <div className="LessonPage-references">
                <h3>Результат</h3>
                {renderContainer(lesson.results.map((el:string) => {
                    const image = require(`../../assets/${lesson.name}/${el}`);
                    return <img src={image} alt={el} className="reference" onClick={() => handleImageClick(image)} />
                }))}
            </div>
        </div>
            </>
    );
};

export default LessonPage;