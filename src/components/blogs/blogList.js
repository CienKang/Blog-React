import React from 'react';
import BlogSummary from './blogSummary';

const BlogList = () => {
    return (
        <div className="blog-list section">
            <BlogSummary />
            <BlogSummary />
            <BlogSummary />
            <BlogSummary />
        </div>
    );
}

export default BlogList;