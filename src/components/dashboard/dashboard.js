import React from 'react';
import { connect } from 'react-redux';
import BlogList from '../blogs/blogList';
import Notifications from './notifications';

const Dashboard = (props) => {

    const { blogs } = props;
    console.log(blogs);
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <BlogList blogs={blogs} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blog.blogs
    }
}

export default connect(mapStateToProps)(Dashboard);