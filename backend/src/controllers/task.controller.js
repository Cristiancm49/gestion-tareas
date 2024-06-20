const db = require('../database')

const getAllTask = async (req, res) => {
    try {
        const allTask = await db.query('Select * from task;');
        res.json(allTask.rows)
    } catch (error) {
        res.json({ error: error.message })
    }
};

const getTask = async (req, res) => {
    const { id } = req.params
    
    try {
        const task = await db.query('SELECT * FROM task WHERE id = $1', [id]);
        if(task.rows.length === 0) {
            return res.status(404).json({
                message: "Tarean no encontrada"
            })
        }
        res.json(task.rows)
    } catch (error) {
        console.log(error.message)
        
    }
 
}

const deleteTask = async (req, res) => {
    res.send('Eliminar tarea')
};

const updateTask = async (req, res) => {
    res.send('actulazar tareas')
};

const createTask = async (req, res) => {
    const { title, descripcion } = req.body

    try {
        const result = await db.query('INSERT INTO task(title, descripcion) VALUES($1, $2) RETURNING *', [title, descripcion]);
        res.json(result.rows[0]);

    } catch (error) {
        res.json({ error: error.message })

    }


};


module.exports = {
    getAllTask,
    getTask,
    deleteTask,
    createTask,
    updateTask
}