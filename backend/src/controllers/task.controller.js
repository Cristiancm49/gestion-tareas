const db = require('../database')

const createTask = async (req, res) => {
    const { title, descripcion } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO task(title, descripcion) VALUES($1, $2) RETURNING *',
            [title, descripcion]
        );
        res.json(result.rows[0]);

    } catch (error) {
        res.json({ error: error.message });
    }
};

const getAllTask = async (req, res) => {
    try {
        const allTask = await db.query('Select * from task;');
        res.json(allTask.rows);
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await db.query(
            'SELECT * FROM task WHERE id = $1',
            [id]);
        if (task.rows.length === 0) {
            return res.status(404).json({
                message: "Tarean no encontrada"
            });
        }
        res.json(task.rows);
    } catch (error) {
        console.log(error.message);

    }

}

const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            'DELETE FROM task WHERE ID = $1 RETURNING * ',
            [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "Tarea no encontrada"
            });
        };
        res.sendStatus(204);

    } catch (error) {
        console.log(error.message);
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, descripcion } = req.body;

    try {
        const result = await db.query(
            'UPDATE task SET title = $1, descripcion = $2 WHERE id = $3 RETURNING *',
            [title, descripcion, id]
        );

        if (result.rows.length === 0) {
            res.status(404).json({
                message: "Tarea no encontrada"
            })
        };

        console.log('Se actualizo correctamente');
        res.json(result.rows[0]);

    } catch (error) {
        res.json({
            error: error.message
        });

    }

};




module.exports = {
    getAllTask,
    getTask,
    deleteTask,
    createTask,
    updateTask
}