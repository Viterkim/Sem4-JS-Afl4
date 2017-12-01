const initialState = {
  todos: [
    {
      task: 'tømme opvasker',
      completed: false
    },
    {
      task: 'gå med mille',
      completed: false
    }
  ]
}

export default function(state=initialState, action) {
  switch(action.type){
    case 'ADD_TO_TODO':{
      return {...state, todos: [...state.todos, action.payload]}
    }

    case 'REMOVE_FROM_TODO': {
      return {
        ...state,
        cart: state.todos.filter(item => item.task !== action.payload.task)
      }
    }

    default:{
      return state;
    }
  }
}