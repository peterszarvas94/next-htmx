import { NextRequest, NextResponse } from 'next/server'
import Todolist from '@/components/Todolist';
import { render, renderAsync } from '@/utils/render';
import { todos } from '@/db/schema';
import { db } from '@/db/db';
import Todo from '@/components/Todo';

export async function GET(): Promise<NextResponse> {
  try {
    const html = await renderAsync(Todolist())
    return new NextResponse(html, {
      status: 200,
    })
  } catch (error) {
    throw new Error("Failed to render")
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const payload = await req.text()
  const params = new URLSearchParams(payload);
  const text = params.get("text");
  const completed = params.get("completed") === "on";

  if (!text) {
    throw new Error("Missing text")
  }

  const todo = await db.insert(todos).values({
    text,
    completed,
  }).returning().get();

  try {
    const html = await render(<Todo text={todo.text} completed={todo.completed} key={todo.id} id={todo.id}/>)

    return new NextResponse(html, {
      status: 200,
    })
  } catch (error) {
    throw new Error("Failed to render")
  }
}
