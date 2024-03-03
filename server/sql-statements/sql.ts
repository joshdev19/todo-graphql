export const statments = {
    getTodos: "select * from todos",
    getTodosByID: "select * from todos where id = ?",
    createTodo: "insert into ( title, description, done ) values ( ? )",
    updateTodo: "update todo set title = ?, description = ?, done = ?",
    deleteTodo: "delete from todos where id = ?"
}