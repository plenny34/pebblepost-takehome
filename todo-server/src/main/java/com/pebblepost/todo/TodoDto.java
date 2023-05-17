package com.pebblepost.todo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TodoDto {

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Long id;

    private String task;

    private boolean active = true;

    public TodoDto() {
    }

    public TodoDto(Long id) {
        this.id = id;
    }

    public static TodoDto fromEntity(Todo todo) {
        return TodoDto.builder().id(todo.getId()).task(todo.getTask()).isActive(todo.isActive()).build();
    }

    public static Todo toEntity(TodoDto dto) {
        return Todo.builder().id(dto.getId()).task(dto.getTask()).isActive(dto.isActive()).build();
    }

    private static Builder builder() {
        return new Builder();
    }

    private static class Builder {

        TodoDto todoDto = new TodoDto();

        public Builder id(Long id) {
            todoDto.setId(id);
            return this;
        }

        public Builder task(String task) {
            todoDto.setTask(task);
            return this;
        }

        public Builder isActive(boolean isActive) {
            todoDto.setActive(isActive);
            return this;
        }

        public TodoDto build() {
            return todoDto;
        }

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "TodoDto{" +
                "id=" + id +
                ", task='" + task + '\'' +
                ", isActive=" + active +
                '}';
    }
}
