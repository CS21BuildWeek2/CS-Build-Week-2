
exports.up = function(knex) {
    return knex.schema.createTable("moveForward", tbl => {
        tbl.increments();
        tbl.string("moveForward").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("moveForward");

};
