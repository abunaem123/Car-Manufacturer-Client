// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Review from './Review'

const Reviews = () => {
    const [reviews, setReviews]=useState([]);

    useEffect( ()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    // const [reviews,setReviews]=useState([]);

    // useEffect ( ()=>{
        // fetch('review.data')
        // .then(res =>res.json())
        // .then(data => setReviews(data))
    // })
    // const reviews = [
    //     {
    //         "_id": "1",
    //         "name": "Valentine Michael",
    //         "picture": "https://i.ibb.co/JyxfQ96/people1.png",
    //         "content": "Ad eu qui dolor fugiat excepteur nostrud. Deserunt amet voluptate irure cupidatat amet sunt ipsum ex aliqua occaecat officia aliqua.Tempor dolore deserunt enim incididunt ex eiusmod.Enim aliquip magna occaecat qui eiusmod ",
    //         "rating": "5"
    //     },
    //     {
    //         "_id": "2",
    //         "name": "Noel Ryan",
    //         "picture": "https://i.ibb.co/28FVS2G/people2.png",
    //         "content": "Laboris fugiat eiusmod labore incididunt do cupidatat. Veniam culpa laboris ex nisi consectetur ex aliqua dolore.Eu nisi aute cupidatat fugiat ipsum minim reprehenderit culpa magna mollit.Voluptate excepteur elit nostrudculpa quis commodo",
    //         "rating": "4"
    //     },
    //     {
    //         "_id": "3",
    //         "name": "Howell Flynn",
    //         "picture": "https://i.ibb.co/ZxL49sp/people3.png",
    //         "content": "Ea aliquip aliqua minim sunt incididunt sunt velit commodo ea mollit  voluptate sit.Eu in aliqua sit exercitation eu esse occaecat ipsum id sit cillum aliqua minim qui.Cupidatat non nostrud excepteur sunt magna fugiat ",
    //         "rating": "5"
    //     }
    // ]
    return (
        <div className='px-12 mx-auto'>
            <div className='lg:py-12 sm:py-0'>
                <div className='text-center'>
                    <h2 className='text-3xl py-2 text-primary font-bold'>Customer Review</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        reviews.map( review => <Review 
                            key={review._id}
                            review={review}
                         ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;