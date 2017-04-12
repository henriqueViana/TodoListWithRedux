import { combineReducers } from 'redux';

const rootReducers = combineReducers({

    todo: () => ({
        description: 'Estudar NodeJS' ,
        list: [
            {
                _id: 1,
                description: 'Pagar a fatura do cartão',
                done: true
            },
            {
                _id: 2,
                description: 'Reunião com fornecedores dia 18/04',
                done: false
            }
        ]
    })
});

export default rootReducers;