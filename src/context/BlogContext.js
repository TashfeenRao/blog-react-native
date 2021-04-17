import createdataContext from './createdataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'addBlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `This Blog is added#${state.length + 1}`,
        },
      ];

    case 'deleteBlogPost':
      return state.filter((blog) => blog.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => dispatch({ type: 'addBlogPost' });
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: 'deleteBlogPost', payload: id });
};

export const { Context, Provider } = createdataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
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
