
import express from 'express';

const todos = [
    { id: 1, text: 'Buy milk', createdAt: new Date() },
    { id: 2, text: 'Buy bread', createdAt: new Date() },
    { id: 3, text: 'Buy butter', createdAt: null }
];

export class TodosController {

    constructor(){}

    public getTodos = ( req: express.Request, res: express.Response )=>{
        res.json({
            total: todos.length,
            data: todos
        });
    }

    public getTodoById = (req: express.Request, res: express.Response)=>{

        const id: number = +req.params.id; //el simbolo + hace la conversion

        if( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number!' });

        const todo = todos.find( td => td.id == id );

        ( todo ) //validamos
            ? res.status(200).json({ data: todo })
            : res.status(404).json({ error: `TODO with id ${id} not found!` });

    }

    public createTodo = (req: express.Request, res: express.Response)=>{

        const { text } = req.body;

        if( !text ) return res.status(400).json({ error: 'Text property is required!' });

        const newTodo = {
            id: (todos.length + 1),
            text: text,
            createdAt: null
        };

        todos.push( newTodo );

        res.json({
            message: 'Task successfully created!',
            data: newTodo
        });

    }

    public updateTodo = (req: express.Request, res: express.Response)=>{

        const id: number = +req.params.id;

        if( isNaN(id) ) {
            return res.status(400).json({ error: 'ID argument is not a number!' });
        }

        //! REFERENCIA | Cualquier actualizacion afecta al item en el arreglo.
        const todo = todos.find( td => td.id === id );

        if( !todo ){
            return res.status( 404 ).json({ error: `Todo with id ${id} not found!` });
        }

        const { text } = req.body;

        if( !text ){
            return res.status(400).json({ error: 'Text property is required!' });
        }

        todo.text = text;

        res.json({
            message: 'Task successfully updated',
            data: todo
        });
    }

}



