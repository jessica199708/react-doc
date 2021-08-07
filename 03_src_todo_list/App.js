import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'
import './App.css';
// App.js is normal javascript file which has JSX code inside render function. 
// The name App is user-defined you can keep any name but remember to save as .js file.

// 1. 拆分组件、实现静态组件
// 2. 动态初始化列表（如何确定将数据放在哪个组件的state中
//   - 某个组件的使用：放在其自身的state中
//   - 某些组件的使用：放在它们共同的父组件state中（状态提升）
// 3. 关于父子组件之间的通信
//   - 【父组件】给【子组件】传递数据：通过props传递
//   - 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
// 4. 状态在哪里，操作状态的方法就在哪里
export default class App extends React.Component {
    // initiallize states
    state = {
        todos: [
            { id: nanoid(), name: 'eat', done: true },
            { id: nanoid(), name: 'sleep', done: true },
            { id: nanoid(), name: 'coding', done: false },
        ]
    }

    // add a todo object{}
    addTodos = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]  // add new todo at front list
        this.setState({ todos: newTodos })
    }

    // update the todo object in state
    updateTodos = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }  // change done
            else return todoObj
        })
        this.setState({ todos: newTodos })

    }

    // delete todo
    deleteTodos = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done: done }
        })
        this.setState({ todos: newTodos })
    }

    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })

    }

    render() {
        const { todos } = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodos={this.addTodos} />
                    <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }

}
