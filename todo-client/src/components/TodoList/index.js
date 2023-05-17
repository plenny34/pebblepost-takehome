import { TodoInput } from '../TodoInput';
import { useEffect, useState } from 'react';
import { getAllTodos } from '../../services/TodoService';
import { Todo } from '../Todo';
import { TodoListFooter } from '../TodoListFooter';
import { Loader } from '../Loader';
import { deleteTodo } from '../../services/TodoService';

export const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
};

export const TodoList = ({}) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const { data, isFetching, refetch } = getAllTodos(true);

  const deleteTodoMutation = deleteTodo();

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.ALL) {
      return true;
    } else if (filter === FILTERS.ACTIVE) {
      return todo.active;
    } else {
      return !todo.active;
    }
  });

  const activeTodos = todos.reduce((accumulator, todo) => {
    return todo.active ? accumulator + 1 : accumulator + 0;
  }, 0);

  const handleClearAllCompleted = () => {
    todos.forEach((todo) => {
      if (!todo.active) {
        deleteTodoMutation.mutate(todo.id);
      }
    });
  };

  return (
    <div className="border bg-white w-2/3 flex flex-col">
      <TodoInput />
      {isFetching && <Loader />}
      {data && !isFetching && (
        <>
          {filteredTodos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
          <TodoListFooter
            activeTodos={activeTodos}
            activeFilter={filter}
            onChangeFilter={setFilter}
            onClearAllCompleted={handleClearAllCompleted}
          />
        </>
      )}
    </div>
  );
};
