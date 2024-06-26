import { useState, useEffect } from "react";
import Card from "./Card";
import interviewQuestions from "../utils/interview-questions";

const shuffleArray = array => {
    array = array.slice();  // Make a copy of the array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
};

const shuffledInterviewQuestions = shuffleArray(interviewQuestions)

const FlashCards = () => {

    useEffect(() => {
        console.log("shuffledInterviewQuestions: ", shuffledInterviewQuestions)
    })
    

    return(
        <>
            <div className="uk-slider-container-offset" style={{margin: 'auto 0'}} data-uk-slider>

                <div className="uk-position-relative uk-visible-toggle uk-light" data-tabindex="-1">

                    <div className="uk-slider-items uk-child-width-1@s uk-grid">
                        {shuffledInterviewQuestions.map((interviewQuestion, idx) => {
                            return (
                                <div  key={idx}>
                                    <Card interviewQuestion={interviewQuestion} />
                                </div>
                            )
                        })}
                    </div>


                </div>
                <a className="uk-position-center-left uk-position-small uk-hidden-hover" data-href data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" data-href data-uk-slidenav-next data-uk-slider-item="next"></a>

                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" style={{gap:'15px'}}></ul>

            </div>
        </>
    )
}

export default FlashCards;