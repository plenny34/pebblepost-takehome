package com.pebblepost.todo;

import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    Todo createTodo(Todo newTodo) {
        Todo todo = todoRepository.save(newTodo);
        return todo;
    }

    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public Todo getTodo(Long id) throws NotFoundException {
        try {
            return todoRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new NotFoundException(e.getMessage());
        }
    }

    public Todo updateTodo(Long id, Todo updatedTodo) throws NotFoundException {
        try {
            Todo todo = todoRepository.findById(id).get();

            todo.setTask(updatedTodo.getTask());
            todo.setActive(updatedTodo.isActive());

            return todoRepository.save(todo);
        } catch (NoSuchElementException e) {
            throw new NotFoundException(e.getMessage());
        }
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

}
