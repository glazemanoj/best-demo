'use client'

import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface Todo {
    id: number
    text: string
    completed: boolean
}

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState('')

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault()
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }])
            setNewTodo('')
        }
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
            <form onSubmit={addTodo} className="flex mb-4">
                <Input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className="flex-grow mr-2"
                />
                <Button type="submit">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add
                </Button>
            </form>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-3 rounded">
                        <div className="flex items-center">
                            <Checkbox
                                id={`todo-${todo.id}`}
                                checked={todo.completed}
                                onCheckedChange={() => toggleTodo(todo.id)}
                                className="mr-2"
                            />
                            <label
                                htmlFor={`todo-${todo.id}`}
                                className={`${todo.completed ? 'line-through text-gray-500' : ''}`}
                            >
                                {todo.text}
                            </label>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => deleteTodo(todo.id)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

