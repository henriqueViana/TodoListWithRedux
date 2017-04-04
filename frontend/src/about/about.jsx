import React from 'react';
import PageHeader from '../template/pageHeader';

export default props => (
    <section>
        <PageHeader name='Sobre' small='o projeto' />
        <h2>Projeto de estudos sobre ReactJS , NodeJS e MongoDB</h2>
        <div>
            O objetivo era ser criado uma lista de tarefas (TodoList) onde pode-se adicionar uma tarefa,
            marcar como pendente / concluída, excluir tarefa e pesquisar tarefa.
        </div>
    </section>
)