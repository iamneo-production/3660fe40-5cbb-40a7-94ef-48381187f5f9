import React from 'react';
import './Card.css';

const Card = (props) => {
    return(
        <div>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypic" className="cardimg"/>
                    <div className="cardinfo">
                        <h3 className="card_title">{props.title}</h3>
                        <h4 className="card_year">{props.year}</h4>
                        <h5 className="card_time">
                            {props.hours}:{props.minutes}
                        </h5>
                        <h6 className="card_genre">{props.genres}</h6>
                    
                        <button className="remove">Remove</button>
                        
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Card;