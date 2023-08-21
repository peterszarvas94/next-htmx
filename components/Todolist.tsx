import Todo from "@/components/Todo";
import { db } from "@/db/db";

export default async function Todolist() {
  const data = await db.query.todos.findMany();
  const todos = data.map((todo) => (
    <Todo text={todo.text} completed={todo.completed} key={todo.id} id={todo.id}/>
  ))

  return (
    <ul className="flex flex-col items-center" id="todos">
      {todos}
    </ul>
  )
}
