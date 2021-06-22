import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    } // HYDRATE 를 위해 index 리듀서 추가 -> 원래는 없어도 되는데 SSR을 위해필요
  },
  user, // user ,post 의 initialState는 알아서 넣어준다.
  post,
});

export default rootReducer;
