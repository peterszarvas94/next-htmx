import { InferModel } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
  id: integer('id').primaryKey(),
  text: text('text').notNull(),
  completed: integer('completed', { mode: 'boolean' }).notNull()
});

export type Todo = 
export type NewTodo = InferModel<typeof todos, "insert">;
