const blogs =  ( state = [], action ) => {
    switch (action.type) {
        case 'BLOGS':
            return action.blog
        case 'ADD_BLOG':
            return [action.blog, ...state];
        default:
            return state
    }
}

export default blogs;