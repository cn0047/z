const summary = (state = {nextFrom: 0, users: [], relationships: []}, action) => {
  let d = action.payload;
  let nextFrom = 0;

  switch (action.type) {
    case 'SUMMARY_AFTER_LOAD_FEED':
      if (d.hasOwnProperty('paging') && d.paging.hasOwnProperty('next_from')) {
        nextFrom = d.paging.next_from;
      }
      return {
        nextFrom: nextFrom,
        users: [...state.users, ...d.users],
        relationships: [...state.relationships, ...d.relationships]
      };
    default:
      return state;
  }
};

export default summary;
