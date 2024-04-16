import { useState } from 'react'

const Card = ({interviewQuestion}) => {
    const [ showAnswer, setShowAnswer ] = useState(false)

    return(
        <div className="uk-card uk-card-default uk-card-body uk-width-1@m " style={{minHeight: '300px'}}>
            {
                !showAnswer 
                    ? (
                        <div>
                            <h3 className="uk-card-title">{interviewQuestion?.Type}</h3>
                            <p className='uk-text-normal' style={{maxWidth:'600px', margin:'3em auto'}}>{interviewQuestion?.Question}</p>
                            <button 
                                className="uk-button uk-button-default uk-text-bold" 
                                onClick={()=>{setShowAnswer(!showAnswer)}}
                            >
                                Show Answer
                            </button>
                        </div>
                    )
                    : (
                        <div>  
                            <div data-uk-switcher="animation: uk-animation-fade; toggle: > *" style={{display:'flex', gap: '5px', justifyContent:'center'}}>
                                <button className="uk-button uk-button-default" style={{padding: "0 18px"}} data-type="button">STAR</button>
                                <button className="uk-button uk-button-default" style={{padding: "0 18px"}} data-type="button">FULL</button>
                                <button className="uk-button uk-button-default" style={{padding: "0 18px"}} data-type="button">VISUAL</button>
                            </div>

                            <ul className="uk-switcher uk-margin">
                                <li>
                                    <div>
                                        <h2 className="uk-card-title" style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.title}</h2>

                                        <h3 className="uk-card-title" style={{textAlign:'left'}}>Situation</h3>
                                        <p style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.Situation}</p>

                                        <h3 className="uk-card-title" style={{textAlign:'left'}}>Task</h3>
                                        <p style={{textAlign:'left'}}>{interviewQuestion.STAR_Summary.Task}</p>

                                        <h3 className="uk-card-title" style={{textAlign:'left'}}>Action</h3>
                                        <ul className="uk-list uk-list-bullet" style={{textAlign:'left'}}>
                                            {
                                                interviewQuestion.STAR_Summary.Action.map((action,idx) => {
                                                    return <li key={idx}>{action}</li>
                                                })
                                            }
                                        </ul>

                                        <h3 className="uk-card-title" style={{textAlign:'left'}}>Result</h3>
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
                                className="uk-button uk-button-default uk-text-bold" 
                                style={{marginTop:'3em'}} 
                                onClick={()=>{setShowAnswer(!showAnswer)}}
                            >   
                                Hide Answer
                            </button>
                        </div>
                    )
            }
        </div>
    ) 
}

export default Card;