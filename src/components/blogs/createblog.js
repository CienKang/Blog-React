import React, { useState } from 'react';

function CreateBlog() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'title')
            setTitle(e.target.value);
        if (e.target.id === 'body')
            setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, body);
    }

    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3 ">Create a New Blog </h5>
                <div className="input-field">
                    <label htmlFor="title">Blog Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="body">Blog Content</label>
                    <textarea className="materialize-textarea" id="body" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 x-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBlog;
