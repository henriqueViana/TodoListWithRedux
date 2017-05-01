import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changedDescription, search, add, clearSearch } from './todoActions';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const {add, search, description, clearSearch} = this.props;

        if(e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if(e.key === 'Escape') {
            clearSearch()
        }
    }

    render() {

        const {add, search, description, clearSearch} = this.props;
        return(
            <div role='form' className='todoForm'>

                <Grid cols='12 9 10'> 
                    <input type='text' id='description' className='form-control' value={description} onChange={this.props.changedDescription} onKeyUp={this.keyHandler} placeholder='Adicione uma tarefa'/>
                </Grid>
                
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)} />
                    <IconButton style='info' icon='search' onClick={() => search(description)} />
                    <IconButton style='default' icon='close' onClick={clearSearch} />
                </Grid>

            </div>
        )
    }

}


const mapStateToProps = state => ({ description: state.todo.description });

const mapDispatchToProps = dispatch => (bindActionCreators({ changedDescription, search, add, clearSearch } , dispatch))

export default connect(mapStateToProps , mapDispatchToProps)(TodoForm) 
