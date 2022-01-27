import React from 'react';
import Rating from 'react-rating';
const SingleBlog = (props) => {


    const { name, img, seller, price, stock, star } = props.allblogs;
    return (
        <div className="blog">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="blog-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} Latest blog</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />

            </div>
        </div>
    );
};

export default SingleBlog;