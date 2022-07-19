const reducer = (state, action) => { 

  switch (action.type) { 
    case 'DATA_RESPONSE_SUCCESS':
      const { data: { users, messages } } = action;
      const usersMap = new Map();

      users.map(user => usersMap.set(user.id, user));

      const messagesWithUsers = messages.map(msg => {
        return { ...msg, author: usersMap.get(msg.authorId) };
      }); 
      
      const newState = {
        ...state,
        users,
        messages: messagesWithUsers
      };
      return newState;
    
    
    
    default:
      return state;
  }

}

export default reducer;
