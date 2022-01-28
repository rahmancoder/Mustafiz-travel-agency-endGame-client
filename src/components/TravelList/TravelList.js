import React, { useEffect, useState } from 'react';
import SingleTravelList from '../SingleTravelList/SingleTravelList';
import { NavLink } from 'react-router-dom';


const TravelList = () => {

    const [travellist, setAlltravellist] = useState([]);

    // const [allblogs, setAllblog] = useState([]);

    // const [page, setPage] = useState(0);
    // const [pageCount, setPageCount] = useState(0);
    // // products to be rendered on the UI
    // const [displayBlogs, setDisplayBlogs] = useState([]);
    // const size = 10;
    // useEffect(() => {
    //     // fetch(`https://frightening-spell-88460.herokuapp.com/travel?page=${page}&&size=${size}`)
    //     fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllblog(data.allblogs);
    //             setDisplayBlogs(data.allblogs);
    //             const count = data.count;
    //             const pageNumber = Math.ceil(count / size);
    //             setPageCount(pageNumber);
    //         });
    // }, [page]);


    useEffect(() => {
        // fetch('http://localhost:5000/travel')
        fetch('https://frightening-spell-88460.herokuapp.com/travel')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setAlltravellist(data));

    }, [])



    return (
        <div className="text-center container mt-4">
            <NavLink sx={{ m: 10 }}
                style={{ textDecoration: 'none' }}
                to="/home">
                Home
            </NavLink>
            <div className="text-center">
                <h1 className="text-danger"> Choose your Travel List</h1>
                <p>Want to Travel? Book Now!</p>

                <div className="row m-3">

                    {
                        // travellist.slice(0, 9).map(travel =>
                        travellist.map(travel =>
                            <SingleTravelList
                                key={travel.index}
                                travel={travel}

                            ></SingleTravelList>

                        )
                    }

                </div>
                {/* <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div> */}

            </div>


        </div>
    );
};

export default TravelList;