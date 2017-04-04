import React , { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

import Alert from '../helpers/alert';

const URL = 'http://localhost:3000/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {description: '', list: []}

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.refresh();
    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/` : '';

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => this.setState({...this.state, description, list: res.data}));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleChange(event) {
        this.setState({...this.state , description: event.target.value});
    }

    handleAdd() {
        const description = this.state.description;
        
        axios.post(URL , {description})
            .then(res => this.refresh());
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}` , {...todo, done: true})
            .then(res => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}` , {...todo, done: false})
            .then(res => this.refresh(this.state.description));
    }

    handleDelete(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return(
            <section>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    description={this.state.description}/>

                <TodoList 
                    list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleDelete={this.handleDelete}/>

            </section>
        )
    }
}