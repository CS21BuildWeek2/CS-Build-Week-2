
exports.up = function(knex) {
    return knex.schema.createTable("traversalStack", tbl => {
        tbl.increments();
        tbl.string("direction").notNullable();
    });
    }; 


exports.down = function(knex) {
    return knex.schema.dropTableIfExists("traversalStack");

};
