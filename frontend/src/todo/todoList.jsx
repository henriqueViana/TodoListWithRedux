import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markAsDone, markAsPendind, deleteTodo } from './todoActions';

import IconButton from '../template/iconButton';

import '../template/todoListStyle.css';

const TodoList = props => {

    const renderRows = () => {
        
        const list = props.list || [];
        
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)}/>
                    <IconButton style='warning' icon='undo' hide={!todo.done} onClick={() => props.markAsPendind(todo)} />
                    <IconButton style='danger' icon='trash-o' hide={!todo.done} onClick={() => props.deleteTodo(todo)}/>
                </td>
            </tr>
        ));
    }
    
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='actionButtons'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}
    
const mapStateToProps = state => ({list: state.todo.list});

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPendind, deleteTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);