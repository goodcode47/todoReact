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
  if (todos.length > 0) {
    return (
      <>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <label className={styles.itemLabel}>
              <input
                className={styles.itemCheckbox}
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span
                className={`${todo.completed ? styles.completed : styles.todoText}`}
              >
                {todo.title}
              </span>
            </label>

            <div className={styles.itemControls}>
              <Button variant="edit" onClick={() => onEdit(todo.id)} />{" "}
              <Button variant="del" onClick={() => onDelete(todo.id)} />
            </div>
          </li>
        ))}
      </>
    );
  } else {
    return (
      <div className={styles.todoEmpty}>
        <img src="./images/empty.png" width="221" height="174" alt="No data." />
        <p className={styles.todoEmptyText}>Empty...</p>
      </div>
    );
  }
};

export default TodoListItem;
