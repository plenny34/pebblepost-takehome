package com.pebblepost.todo;

import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController()
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoDto create(@RequestBody TodoDto createDto) {
        return TodoDto.fromEntity(todoService.createTodo(TodoDto.toEntity(createDto)));
    }

    @GetMapping
    public List<TodoDto> getAll() {
        List<Todo> todos = todoService.getTodos();

        return todos.stream().map(todo -> {
            return TodoDto.fromEntity(todo);
        }).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public TodoDto getOne(@PathVariable("id") Long id) {
        try {
            return TodoDto.fromEntity(todoService.getTodo(id));
        } catch (NotFoundException e) {
            return null;
        }
    }

    @PutMapping("/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public TodoDto updateTodo(@PathVariable("id") Long id, @RequestBody TodoDto updated) {
        try {
            return TodoDto.fromEntity(todoService.updateTodo(id, TodoDto.toEntity((updated))));
        } catch (NotFoundException e) {
            return null;
        }
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        todoService.deleteTodo(id);
    }


}
