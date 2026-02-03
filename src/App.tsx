import { useState, useMemo } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList/TodoList";
import Button from "./components/UI/Button/Button";
import Popup from "./components/UI/Popup/Popup";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Go for a walk",
      completed: false,
    },
    {
      id: 2,
      title: "Buy milk",
      completed: true,
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMode, setPopupMode] = useState<"add" | "edit">("add");
  const [popupText, setPopupText] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("all");

  const openAddPopup = () => {
    setPopupMode("add");
    setPopupText("");
    setCurrentTodoId(null);
    setIsPopupOpen(true);
  };

  const openEditPopup = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setPopupMode("edit");
      setPopupText(todoToEdit.title);
      setCurrentTodoId(id);
      setIsPopupOpen(true);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupText("");
    setCurrentTodoId(null);
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
      title: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    closePopup();
  };

  const editTodo = (id: number, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
    closePopup();
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleSearch = (searchString: string) => {
    setSearchQuery(searchString);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSaveTodo = (text: string) => {
    if (popupMode === "add") {
      addTodo(text);
    } else if (popupMode === "edit" && currentTodoId !== null) {
      editTodo(currentTodoId, text);
    }
  };

  const filteredTodos = useMemo(() => {
    let result = todos;

    if (searchQuery.trim()) {
      result = result.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedValue === "complete") {
      result = result.filter((todo) => todo.completed);
    } else if (selectedValue === "incomplete") {
      result = result.filter((todo) => !todo.completed);
    }

    return result;
  }, [todos, searchQuery, selectedValue]);

  return (
    <div className="app__wrap">
      <div className={styles.app}>
        <Header />
        <main className={styles.app__main}>
          <Navigation
            onSearch={handleSearch}
            selectedValue={selectedValue}
            onSelectChange={handleSelectChange}
          />
          <TodoList
            todos={filteredTodos}
            onEdit={openEditPopup}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
          <Button variant="add" onClick={openAddPopup} />
        </main>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSaveTodo={handleSaveTodo}
        initialText={popupText}
        mode={popupMode}
      />
    </div>
  );
};

export default App;
