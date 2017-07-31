/**
 * Created by cw on 2017-06-26.
 */
export default function (state=null, action) {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;
  }
  return state
}