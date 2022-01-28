import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import SingleBlog from '../SingleBlog/SingleBlog';

import './AllBlogPage.css';

const AllBlogPage = () => {
    const [allblog, setAllblog] = useState([]);

    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // products to be rendered on the UI
    const [displayBlogs, setDisplayBlogs] = useState([]);
    const size = 1;
    useEffect(() => {
        fetch(`http://localhost:5000/allblog?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setAllblog(data.allblog);
                setDisplayBlogs(data.allblog);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);
    return (
        <>

            <div className="allblog-container">
                <div className="blog-container">
                    {
                        displayBlogs.map(blogs => <SingleBlog
                            key={blogs.key}
                            blogs={blogs}

                        >
                        </SingleBlog>)
                    }
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default AllBlogPage;