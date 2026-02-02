import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList = ({ todos, onEdit, onDelete, onToggle }: TodoListProps) => {
  return (
    <ul className={styles["app__todo-list"]}>
      <TodoItem 
        todos={todos} 
        onEdit={onEdit} 
        onDelete={onDelete} 
        onToggle={onToggle} 
      />
    </ul>
  );
};

export default TodoList;
