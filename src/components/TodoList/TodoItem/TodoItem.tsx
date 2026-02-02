import styles from "./TodoItem.module.css";
import Button from "../../UI/Button/Button";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListItemProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoListItem = ({
  todos,
  onEdit,
  onDelete,
  onToggle,
}: TodoListItemProps) => {
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className={styles["app__list-item"]}>
          <label className={styles["app__todo-label"]}>
            <input
              className={styles.app__checkbox}
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span className={todo.completed ? styles.completed : ""}>
              {todo.title}
            </span>
          </label>

          <div className={styles.app__controls}>
            <Button variant="edit" onClick={() => onEdit(todo.id)} />{" "}
            <Button variant="del" onClick={() => onDelete(todo.id)} />
          </div>
        </li>
      ))}
    </>
  );
};

export default TodoListItem;
