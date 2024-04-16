import { useState } from 'react'

const Card = ({interviewQuestion}) => {
    const [ showAnswer, setShowAnswer ] = useState(false)

    console.log('interviewQuestion: ', interviewQuestion)
    return(
        <div className="uk-card uk-card-default uk-card-body uk-width-1@m ">
            {
                !showAnswer 
                    ? (
                        <>
                            <h3 className="uk-card-title">{interviewQuestion?.Type}</h3>
                            <p className='uk-text-normal'>{interviewQuestion?.Question}</p>
                            <button className="uk-button uk-button-primary" onClick={()=>{setShowAnswer(!showAnswer)}}>Show Answer</button>
                        </>
                    )
                    : (
                        <>  
                            <h2 class="uk-card-title">{interviewQuestion.STAR_Summary.title}</h2>

                            <h3 class="uk-card-title">Situation</h3>
                            <p>{interviewQuestion.STAR_Summary.Situation}</p>

                            <h3 class="uk-card-title">Task</h3>
                            <p>{interviewQuestion.STAR_Summary.Task}</p>

                            <h3 class="uk-card-title">Action</h3>
                            <ul class="uk-list uk-list-bullet">
                                {
                                    interviewQuestion.STAR_Summary.Action.map((action,idx) => {
                                        return <li key={idx-action}>{action}</li>
                                    })
                                }
                            </ul>

                            <h3 class="uk-card-title">Result</h3>
                            <p>{interviewQuestion.STAR_Summary.result}</p>

                            <button className="uk-button uk-button-primary" onClick={()=>{setShowAnswer(!showAnswer)}}>Hide Answer</button>
                        </>
                    )
            }
        </div>
    ) 
}

export default Card;