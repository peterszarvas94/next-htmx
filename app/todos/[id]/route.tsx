import Todo from "@/components/Todo";
import { db } from "@/db/db";
import type { Todo as TodoType } from "@/db/schema";
import { todos } from "@/db/schema";
import { render } from "@/utils/render";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};

export async function PATCH(_request: Request, { params }: Props): Promise<NextResponse> {
  const parsedId = parseInt(params.id);
  if (isNaN(parsedId)) {
    throw new Error("Invalid id");
  }

  let oldTodo: TodoType | undefined;
  try {
    oldTodo = await db.query.todos.findFirst({
      where: eq(todos.id, parsedId),
    });
  } catch (error) {
    throw new Error("Failed to search for todo");
  }

  if (!oldTodo) {
    throw new Error("Todo not found");
  }

  const todo = await db
    .update(todos)
    .set({ completed: !oldTodo.completed })
    .where(eq(todos.id, parsedId))
    .returning()
    .get();

  try {
    const html = await render(<Todo text={todo.text} completed={todo.completed} key={todo.id} id={todo.id} />)

    return new NextResponse(html, {
      status: 200,
    })
  } catch (error) {
    throw new Error("Failed to render")
  }
}

export async function DELETE(_request: Request, { params }: Props): Promise<NextResponse> {
  const parsedId = parseInt(params.id);
  if (isNaN(parsedId)) {
    throw new Error("Invalid id");
  }

  try {
    await db
      .delete(todos)
      .where(eq(todos.id, parsedId))
      .run();

    return new NextResponse("", {
      status: 200,
    })
  } catch (error) {
    throw new Error("Failed to delete")
  }
}
