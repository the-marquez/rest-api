
import express from 'express';

const todos = [
    { id: 1, text: 'Buy milk', createdAt: new Date() },
    { id: 2, text: 'Buy bread', createdAt: new Date() },
    { id: 3, text: 'Buy butter', createdAt: new Date() }
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

}



