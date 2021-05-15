export const createBlog = (blog) => {
    return (dispatch, getState) => {
        // call to database or firebase
        dispatch({ type: 'CREATE_BLOG', blog });
    }
}