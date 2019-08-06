export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state)
      return { todos: [...state.todos, action.payload.text] };
    default:
      return state;
  }
}
