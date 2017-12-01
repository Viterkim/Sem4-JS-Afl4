export function deleteFromTodo(task) {
  return {
    type: 'DELETE_FROM_TODO',
    payload: { task }
  }
}

export function addToTodo(task) {
  return {
    type: 'ADD_TO_TODO',
    payload: { task }
  }
}