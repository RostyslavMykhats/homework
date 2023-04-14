import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <div className={styles.pagination} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '50px 0'
                }}>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        {'<'}
                    </button>
                    <span className={styles.current}>{currentPage}</span> /{' '}
                    <span className={styles.total}>{pageNumbers.length}</span>
                    <button onClick={nextPage} disabled={currentPage === pageNumbers.length}>
                        {'>'}
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Pagination;
