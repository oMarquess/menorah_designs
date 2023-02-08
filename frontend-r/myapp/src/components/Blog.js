import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                console.log(res.data)
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}api/blog/`);
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getBlogs = () => {
        let list = [];
        let result = [];
        
        blogs.map(blogPost => {
            return list.push(
                <figure className='figure'>
                <img
                  src={blogPost.thumbnail}
                  className='figure-img img-fluid rounded shadow-3 mb-3'
                  alt='thumbnail'
                />
                <figcaption className='figure-caption text-end'>{blogPost.title}</figcaption>
                <Link to={`/blog/${blogPost.slug}`} className="stretched-link">View</Link>
                </figure>
                // <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                //     <div className="col-auto d-none d-lg-block">
                //         <img width='300' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                //     </div>
                //     <div className="col p-4 d-flex flex-column position-static">
                //         <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                //         <h3 className="mb-0">{blogPost.title}</h3>
                //         <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                //         <p className="card-text mb-auto">{blogPost.excerpt}</p>
                //         <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                //     </div>
                    
                // </div>
                
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/classic'>Classic</Link>
                    <Link className="p-2 text-muted" to='/category/romantic'>Romantic</Link>
                    <Link className="p-2 text-muted" to='/category/traditional'>Traditional</Link>
                    <Link className="p-2 text-muted" to='/category/glamorous'>Glamorous</Link>
                    <Link className="p-2 text-muted" to='/category/modern'>Modern</Link>
                    <Link className="p-2 text-muted" to='/category/non-traditional'>Non-Traditional</Link>
                    <Link className="p-2 text-muted" to='/category/random'>Random</Link>
                    {/* <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
                    <Link className="p-2 text-muted" to='/category/science'>Science</Link>
                    <Link className="p-2 text-muted" to='/category/health'>Health</Link>
                    <Link className="p-2 text-muted" to='/category/style'>Style</Link>
                    <Link className="p-2 text-muted" to='/category/travel'>Travel</Link> */}
                </nav>
            </div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>

            {getBlogs()}
        </div>
    );
};



export default Blog;