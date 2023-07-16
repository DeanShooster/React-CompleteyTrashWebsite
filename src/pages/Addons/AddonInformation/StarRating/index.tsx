import { EmptyStar, FilledStar } from "../../../../assets";

import './index.scss';

interface IStarRating{
    rating: number
}

export const StarRating = ({rating} : IStarRating) => {

    const starRating = Array(rating).fill(<img alt='' src={FilledStar}/>).concat(Array(5 - rating).fill(<img alt='' src={EmptyStar}/>));

    return (
        <div className="stars-rating-container">
            {starRating.map((star: React.ReactNode,index: number)=>{
                return <div key={index}>{star}</div>
            })}
        </div>
    );
}