const db = require('../dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findByIntId,
    update,
    remove
}

async function add(room) {
    const [id] = await db('rooms')
    .insert(room).returning('id')
    return findByIntId(id);
}

function find() {
    return db('rooms')
}

function findByIntId(id) {
    return db('rooms')
    .where({ 'id': id })
    .first();
}