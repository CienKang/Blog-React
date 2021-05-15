const initState = {
    blogs: [
        { id: '1', title: 'help me find peach', content: ' blah blah blah', author: 'Cien Kang' },
        { id: '2', title: 'collect all stars', content: ' blah blah blah', author: 'JK Rowling' },
        { id: '3', title: 'egg hunt with yoshi', content: ' blah blah blah', author: 'Joey Styles' },
        { id: '4', title: 'princess in another castello', content: ' blah blah blah', author: 'Eddie Kingston' }
    ]
};
const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BLOG':
            console.log('created blog', action.blog)
            return state;
        case 'CREATE_BLOG_ERROR':
            console.log('error in creating blog:', action.err)
            return state;
        default:
            return state;
    }
}

export default blogReducer;