import createdataContext from './createdataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addBlogPost': {
      // localStorage.setItem(
      //   'state',
      //   JSON.stringify([
      //     ...state,
      //     {
      //       id: Math.floor(Math.random() * 99999),
      //       title: action.payload.title,
      //       content: action.payload.content,
      //     },
      //   ])
      // );
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    }

    case 'deleteBlogPost':
      return state.filter((blog) => blog.id !== action.payload);

    case 'editBlogPost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'editBlogPost', payload: { id, title, content } });
    if (callback) callback();
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'addBlogPost', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: 'deleteBlogPost', payload: id });
};

export const { Context, Provider } = createdataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ id: 21, title: 'Some post', content: 'some content to be write' }]
);

//const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [blogPosts, dispatch] = useReducer(reducer, []);

//   const addBlogPosts = () =>
//     setBlogPosts([
//       ...blogPosts,
//       { title: `blog post no. is ${blogPosts.length + 1}` },
//     ]);
//   return (//     <BlogContext.Provider value={{ data: blogPosts, dispatch }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
