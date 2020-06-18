
const counterReducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
  }
};

export default counterReducer;
