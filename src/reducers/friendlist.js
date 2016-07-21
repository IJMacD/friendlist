import * as types from '../constants/ActionTypes';

const initialState = {
  friends: [1, 2, 3],
  friendsById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};
export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const lastId = state.friends[state.friends.length-1] || 0,
            newId = lastId + 1;
      return {
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: mapObj(state.friendsById, function (obj) {
          return obj.id !== action.id ? obj : undefined
        })
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: mapObj(state.friendsById, function (obj) {
          return obj.id !== action.id ?
            obj :
            {
              ...obj,
              starred: !obj.starred
            }
        })
      };

    default:
      return state;
  }
}

function mapObj(obj, fn) {
  var out = {};
  Object.keys(obj).forEach(function (key) {
    var res = fn(obj[key]);
    if(res !== undefined) out[key] = res;
  });
  return out;
}
