import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import SingleBlog from '../SingleBlog/SingleBlog';

const AllBlogPage = () => {
    const [allblogs, setAllblog] = useState([]);

    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // products to be rendered on the UI
    const [displayBlogs, setDisplayBlogs] = useState([]);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setAllblog(data.allblogs);
                setDisplayBlogs(data.allblogs);
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
                        displayBlogs.map(allblog => <SingleBlog
                            key={allblogs.key}
                            allblogs={allblogs}

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