const me = (state = {}, action) => {
  const d = action.payload;
  switch (action.type) {
    case 'ME_AFTER_LOG_IN':
      return {
        ...d.user,
        token: d.token,
        qb: d.quickblox
      };
    default:
      return state;
  }
};

export default me;
