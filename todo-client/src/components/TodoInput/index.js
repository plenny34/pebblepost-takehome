import { HiChevronDown } from 'react-icons/hi';
import { createTodo } from '../../services/TodoService';
import { useState } from 'react';

export const TodoInput = ({}) => {
  const [task, setTask] = useState('');

  const createGameMutation = createTodo();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      createGameMutation.mutate(
        {
          task,
        },
        {
          onSuccess: () => {
            setTask('');
          },
        }
      );
    }
  };

  return (
    <div className="flex flex-row py-4 bg-cloud">
      <div className="flex my-auto ml-4">
        <HiChevronDown />
      </div>
      <input
        type="text"
        id="task"
        name="task"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full italic mx-4 bg-cloud text-light-slate"
        placeholder="What needs to be done?"
      />
    </div>
  );
};
