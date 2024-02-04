import React, { useState } from 'react';

const Todo = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleTodo = () => {
    if (input) {
      if (editIndex !== null) {
        data[editIndex] = input;
        setEditIndex(null);
      } else {
        setData([...data, input]);
      }
      setInput('');
    }
  };

  const handleEdit = (item) => {
    setInput(data[item]);
    setEditIndex(item);
  };

  const handleDelete = (item) => {
    const updateTodo = data.filter((x, i) => i !== item);
    setData(updateTodo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo List.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTodo}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <div>
        {data.map((todo, item) => (
          <div key={item.id}>
            <p>{todo}</p>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
