import { Checkbox } from '@mui/material';
import {
  CircleOutlined,
  CheckCircleOutlineOutlined,
} from '@mui/icons-material';
import { deleteTodo, updateTodo } from '../../services/TodoService';
import { useEffect, useState } from 'react';

export const Todo = ({ todo }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(todo.task);

  const updateTodoMutation = updateTodo(todo.id);
  const deleteTodoMutation = deleteTodo(todo.id);

  const onCheckedChange = () => {
    updateTodoMutation.mutate({
      task: todo.task,
      active: !todo.active,
    });
  };

  const onRemoveClick = () => {
    deleteTodoMutation.mutate();
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        updateTodoMutation.mutate({
            task: task,
            active: todo.active,
          });
          }
  };

  return (
    <div
      className="flex flex-row items-center"
      onMouseEnter={() => setShowDelete(editMode ? false : true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div>
        <Checkbox
          checked={!todo.active}
          onChange={onCheckedChange}
          icon={<CircleOutlined />}
          checkedIcon={<CheckCircleOutlineOutlined />}
        />
      </div>
      {editMode && (
        <input
          type="text"
          id="task"
          name="task"
          value={task}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          className="w-full italic text-light-slate"
          placeholder="What needs to be done?"
        />
      )}
      {!editMode && (
        <div
          className={`${
            !todo.active ? 'line-through text-light-slate' : ''
          } cursor-pointer`}
          onDoubleClick={() => {
            setEditMode(true);
            setShowDelete(false);
          }}
        >
          {todo.task}
        </div>
      )}
      {showDelete && (
        <button
          className="ml-auto mr-4 border rounded bg-red-700 text-white px-2 py-1"
          onClick={onRemoveClick}
        >
          Remove
        </button>
      )}
    </div>
  );
};
