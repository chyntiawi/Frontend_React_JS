import React from 'react';

const Infinite = ({ children, className, isLastPage, isLoading, onLoadMore }) => {
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function handleInfiniteLoad() {
        if (isLoading || isLastPage) {
            return;
        }

        if (onLoadMore) {
            onLoadMore();
        }
    }

    function handleScroll() {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            !isLastPage &&
            !isLoading
        ) {
            handleInfiniteLoad();
        }
    }

    return (
        <div className={className}>
            {children}
            {isLoading && 'Loading...'}
        </div>
    );
};

export default Infinite;
