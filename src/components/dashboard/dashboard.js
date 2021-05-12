import React from 'react';
import BlogList from '../blogs/blogList';
import Notifications from './notifications';

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <BlogList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;