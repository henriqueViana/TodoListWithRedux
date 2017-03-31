import React , { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3000/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {description: '', list: []}

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(res => this.setState({...this.state, description: '', list: res.data}));
    }

    handleChange(event) {
        this.setState({...this.state , description: event.target.value});
    }

    handleAdd() {
        const description = this.state.description;
        
        axios.post(URL , {description})
            .then(res => this.refresh());
    }

    handleDelete(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh());
    }

    render() {
        return(
            <section>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList list={this.state.list} handleDelete={this.handleDelete}/>
            </section>
        )
    }
}