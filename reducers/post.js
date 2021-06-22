const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '태이',
      },
      content: '첫번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'data:image/jpeg;base64,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',
        },
        {
          src: 'https://cdnweb01.wikitree.co.kr/webdata/editor/201508/10/img_20150810171852_7b8598e5.jpg',
        },
        { src: 'https://i.ytimg.com/vi/uis8bTaFsq8/maxresdefault.jpg' },
      ],
      Comments: [
        {
          User: {
            nickname: '토리',
          },
          content: '댓글111',
        },
        {
          User: {
            nickname: '치타',
          },
          content: '댓글치타치',
        },
        {
          User: {
            nickname: '콩이',
          },
          content: '댓글 콩콩',
        },
      ],
      imagePaths: [],
      postAdded: false,
    },
  ],
  imagePaths: [],
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미',
  User: {
    id: 1,
    nickname: '태이',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
