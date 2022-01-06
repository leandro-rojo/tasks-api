import {connect} from '../database' 

const getTasks = async (req, res) => {
    try{
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM Tasks');
        connection.end();
        res.status(200).json(rows);
    }
    catch(err){
        connection.end();
        console.log(err);
        res.status(500).json({err});
    }
}
const getTask = async (req, res) => {
    try{
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM Tasks WHERE id = ?',[req.params.id]);
        connection.end();
        rows.length ? res.status(200).json(rows[0]) : res.sendStatus(404);
    }
    catch(err){
        connection.end();
        console.log(err);
        res.status(500).json({err});
    }
}
const getTasksCount = async (req, res) => {
    try{
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) cantidad FROM Tasks');
        connection.end();
        res.status(200).json(rows[0]['cantidad']);
    }
    catch(err){
        connection.end();
        console.log(err);
        res.status(500).json({err});
    }
}
const saveTask = async (req, res) => {
    try{
        const connection = await connect()
        const [results] = await connection.query('INSERT INTO Tasks (title,description) VALUES (?, ?)', [req.body.title, req.body.description]);
        connection.end();
        res.status(201).json({
            id: results.insertId,
            ...req.body
        });
    }
    catch(err){
        connection.end();
        console.log(err);
        res.status(500).json({err});
    }
}
const deleteTask = async (req, res) => {
    try{
        const connection = await connect()
        await connection.query('DELETE FROM Tasks WHERE id = ?',[req.params.id]);
        connection.end();
        res.sendStatus(204);
    }
    catch(err){
        connection.end();
        console.log(err);
        res.status(500).json({err});
    }
}
const updateTask = async (req, res) => {
    try{
        const connection = await connect()
        const result = await connection.query('UPDATE Tasks SET ? WHERE id = ?',[
            req.body,
            req.params.id
        ]);
        connection.end();
        res.sendStatus(204);
    }
    catch(err){
        connection.end();
        console.log(err);
        res.status(500).json({err});
    }

}

export {
    getTasks,
    getTask,
    getTasksCount,
    saveTask,
    updateTask,
    deleteTask
};