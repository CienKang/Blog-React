export const createBlog = (blog) => {
    return (dispatch, getState) => {
        // call to database or firebase
        console.log(blog);
        dispatch({ type: 'CREATE_BLOG', blog });
    }
}