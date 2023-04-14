import React, { useEffect, useState } from 'react'
import styles from './Posts.module.scss'
import Post from '../Post/Post';
import Pagination from '../Pagination/Pagination';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    useEffect(() => {
        fetch('https://admin.ikar-thinktank.org/api/news')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.data.reverse());
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    // Calculate current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1
                            style={{
                                textAlign: 'center',
                                fontSize: '30px',
                                fontWeight: '600',
                                color: '#000',
                                margin: '50px 0',
                                color: '#2A3A9D',
                                textTransform: 'uppercase',
                            }}
                        >
                            
                            Наші Дослідження
                        </h1>
                        <div className={styles.posts}>
                            {currentPosts.map((post) => (
                                <Post key={post.id} title={post.attributes.title} text={post.attributes.text} />
                            ))}
                        </div>
                        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} paginate={paginate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts

