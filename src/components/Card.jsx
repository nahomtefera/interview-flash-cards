import { useState } from 'react'

const Card = ({interviewQuestion}) => {
    const [ showAnswer, setShowAnswer ] = useState(false)

    console.log('interviewQuestion: ', interviewQuestion)
    return(
        <div className="uk-card uk-card-default uk-card-body uk-width-1@m " style={{minHeight: '300px'}}>
            {
                !showAnswer 
                    ? (
                        <>
                            <h3 className="uk-card-title">{interviewQuestion?.Type}</h3>
                            <p className='uk-text-normal' style={{maxWidth:'600px', margin:'3em auto'}}>{interviewQuestion?.Question}</p>
                            <button 
                                className="uk-button uk-button-primary uk-text-bold" 
                                onClick={()=>{setShowAnswer(!showAnswer)}}
                            >
                                Show Answer
                            </button>
                        </>
                    )
                    : (
                        <>  
                            <div data-uk-switcher="animation: uk-animation-fade; toggle: > *" style={{display:'flex', gap: '16px'}}>
                                <button class="uk-button uk-button-primary" style={{padding: "0 8px"}} data-type="button">Star Summary</button>
                                <button class="uk-button uk-button-primary" style={{padding: "0 8px"}} data-type="button">Full Answer</button>
                                <button class="uk-button uk-button-primary" style={{padding: "0 8px"}} data-type="button">Visual Aid</button>
                            </div>

                            <ul class="uk-switcher uk-margin">
                                <li>
                                    <div>
                                        <h2 class="uk-card-title" style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.title}</h2>

                                        <h3 class="uk-card-title" style={{textAlign:'left'}}>Situation</h3>
                                        <p style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.Situation}</p>

                                        <h3 class="uk-card-title" style={{textAlign:'left'}}>Task</h3>
                                        <p style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.Task}</p>

                                        <h3 class="uk-card-title" style={{textAlign:'left'}}>Action</h3>
                                        <ul class="uk-list uk-list-bullet" style={{textAlign:'left'}}>
                                            {
                                                interviewQuestion.STAR_Summary.Action.map((action,idx) => {
                                                    return <li key={idx-action}>{action}</li>
                                                })
                                            }
                                        </ul>

                                        <h3 class="uk-card-title" style={{textAlign:'left'}}>Result</h3>
                                        <p style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.Result}</p>
                                    </div>
                                </li>
                                <li>
                                    <p style={{textAlign:'left'}}>{interviewQuestion.FullAnswer}</p>
                                </li>
                                <li>
                                    <p style={{textAlign:'left'}}>{interviewQuestion.Visual_Aid}</p>
                                </li>
                            </ul>
                            

                            <button 
                                className="uk-button uk-button-primary uk-text-bold" 
                                style={{marginTop:'3em'}} 
                                onClick={()=>{setShowAnswer(!showAnswer)}}
                            >   
                                Hide Answer
                            </button>
                        </>
                    )
            }
        </div>
    ) 
}

export default Card;