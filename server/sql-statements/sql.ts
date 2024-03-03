export const statments = {
    getTodos: "select * from todos",
    getTodosByID: "select * from todos where id = ?",
    createTodo: "insert into todos ( title, description, done ) values ( ? )",
    updateTodo: "update todos set title = ?, description = ?, done = ? where id = ?",
    deleteTodo: "delete from todos where id = ?"
}