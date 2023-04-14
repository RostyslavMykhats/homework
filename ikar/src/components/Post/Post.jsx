import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import icon from './coolicon.png'

const Post = ({ title, text, ...props }) => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className={styles.post}>
                            <div className={styles.post__img}></div>
                            <div className={styles.post__content}>
                                <h2>
                                    {title}
                                </h2>
                                <p>
                                    {text.slice(0,250)}...
                                </p>
                                <a href='#' className={styles.post__link}>
                                    Читати більше <img src={icon} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Post;
