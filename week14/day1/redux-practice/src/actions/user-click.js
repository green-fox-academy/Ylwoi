/**
 * Created by cw on 2017-06-26.
 */

export const userClick = (user) => {
  console.log('You clicked on user: ', user.name);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};