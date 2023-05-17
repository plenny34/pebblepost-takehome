import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/todos';

const TODO_SERVICE_KEYS = {
  GET_ALL_TODOS: 'get-all-todos',
};

export const createTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((data) => axios.post(`${BASE_URL}`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TODO_SERVICE_KEYS.GET_ALL_TODOS],
        exact: false,
      });
    },
  });
};

export const getAllTodos = (enabled) => {
  return useQuery(
    [TODO_SERVICE_KEYS.GET_ALL_TODOS],
    async () => {
      const { data } = await axios.get(BASE_URL);
      return data;
    },
    {
      enabled,
    }
  );
};

export const updateTodo = (id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => axios.put(`${BASE_URL}/${id}`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TODO_SERVICE_KEYS.GET_ALL_TODOS],
        exact: false,
      });
    },
  });
};

export const deleteTodo = (id) => {
  const queryClient = useQueryClient();
  return useMutation((todoId) => axios.delete(`${BASE_URL}/${id ?? todoId}`), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TODO_SERVICE_KEYS.GET_ALL_TODOS],
        exact: false,
      });
    },
  });
};

export const deleteAllClearedTodos = () => {};
