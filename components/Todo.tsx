import { TiDeleteOutline } from 'react-icons/ti'

interface Props {
  text: string
  completed: boolean,
  id: number,
}
export default function Todo({ text, completed, id }: Props) {
  return (
    <li className="flex gap-2 items-center">
      <div>{text}</div>
      <input
        type="checkbox"
        hx-patch={`/todos/${id}`}
        hx-trigger="click"
        hx-target="closest li"
        checked={completed}
      />
      <TiDeleteOutline
        className="text-red-500 cursor-pointer"
        hx-delete={`/todos/${id}`}
        hx-trigger="click"
        hx-target="closest li"
      />
    </li>
  )
}
