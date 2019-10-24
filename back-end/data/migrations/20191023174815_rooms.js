
exports.up = function(knex) {
    return knex.schema.createTable('rooms', tbl => {
        table.increments();
    tbl.string("title", 1000).notNullable();
    tbl.string("description", 1000).notNullable();
    tbl.string("coordinates", 1000).notNullable();
    tbl.string("elevation", 1000).notNullable();
    tbl.string("terrain", 1000).notNullable();
    tbl.string("players", 1000).notNullable();
    tbl.string("items", 1000).notNullable();
    tbl.string("exits", 1000).notNullable();
    tbl.integer("room_id").notNullable().unique();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("room");
};
