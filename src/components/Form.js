import React from "react";
import { useState } from "react";

function Form({ todos, setTodos, todo }) {
  const [form, setForm] = useState("");
  const onChangeForm = (e) => {
    setForm(e.target.value);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (form === "") {
      alert("Bu alan boş geçilemez!!!");
      return false;
    }
    setTodos([
      ...todos,
      { text: form, completed: false, id: Math.random() * 1000 },
    ]);
    setForm("");
  };
  return (
    <div>
      <header className="header">
        <h1>To Do App</h1>
        <form>
          <input
            className="new-todo"
            value={form}
            placeholder="Bugün yapmanız gereken bir şey girin"
            autoFocus
            onChange={onChangeForm}
          />
          <button onClick={onSubmitTodo}></button>
        </form>
      </header>
    </div>
  );
}
export default Form;
