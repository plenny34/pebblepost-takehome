package com.pebblepost.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String task;

    private boolean active = true;

    public Todo() {
    }

    public Todo(Long id) {
        this.id = id;
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

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {

        Todo todo = new Todo();

        public Builder id(Long id) {
            todo.setId(id);
            return this;
        }

        public Builder task(String task) {
            todo.setTask(task);
            return this;
        }

        public Builder isActive(boolean isActive) {
            todo.setActive(isActive);
            return this;
        }

        public Todo build() {
            return todo;
        }

    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", task='" + task + '\'' +
                ", isActive=" + active +
                '}';
    }
}
