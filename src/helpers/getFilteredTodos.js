export const getFilteredTodos = (todoList, filterValue) => {
    switch (filterValue) {
      case "all": {
        return todoList
      }
      case "active": {
        return todoList.filter((todo) => !todo.completed)
      }
      case "completed": {
        return todoList.filter((todo) => todo.completed)
      }
      case "liked": {
        return todoList.filter((todo) => todo.liked)
      }
      default:
        return todoList
    }
  }