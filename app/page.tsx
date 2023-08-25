import Todo from "@/components/Todo";
import Todolist from "@/components/Todolist";
import { db } from "@/db/db";
import Script from "next/script";

export default async function Home() {
// const data = await db.query.todos.findMany();
//   const todos = data.map((todo) => (
//     <Todo text={todo.text} completed={todo.completed} key={todo.id} id={todo.id}/>
//   ))

  return (
    <html>
      <head>
        <Script src="https://unpkg.com/htmx.org@1.9.4" />
      </head>
      <body>
        <form
          hx-post="/todos"
          hx-target="#todos"
          hx-swap="beforeend"
          className="flex gap-2 items-center justify-center p-6"
        >
          <input name="text" placeholder="Add a todo" required className="border border-black px-4 py-2 rounded" />
          <input name="completed" type="checkbox" defaultChecked={false} />
          <button type="submit" className="px-4 py-2 bg-green-400 rounded hover:bg-green-500">Add</button>
        </form>

        <Todolist />
      </body>
    </html>
  )
}
