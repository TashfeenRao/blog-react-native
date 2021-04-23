import jsonServer from '../api/jsonServer';
import createdataContext from './createdataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'getAllBlog':
      return action.payload.data;

    case 'addBlogPost': {
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

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogPosts');
    dispatch({ type: 'getAllBlog', payload: { data: response.data } });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put('/blogPosts/' + id, { title, content });
    dispatch({ type: 'editBlogPost', payload: { id, title, content } });
    if (callback) callback();
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogPosts', { title, content });

    // dispatch({ type: 'addBlogPost', payload: { title, content } });
    if (callback()) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete('/blogPosts/' + id);
    dispatch({ type: 'deleteBlogPost', payload: id });
  };
};

export const { Context, Provider } = createdataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
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
