import kseniia from '../../assets/images/kseniia.jpg';

const INITIAL_STATE = {
  name: 'Kseniia',
  image: kseniia,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
