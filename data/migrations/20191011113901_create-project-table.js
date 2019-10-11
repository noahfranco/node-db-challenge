
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments()
        tbl.string("name", 255).notNullable()
        tbl.string("description", 255)
        tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false)
    })
    .createTable("task", tbl => {
        tbl.increments()
        tbl.string("description", 255).notNullable()
        tbl.string("notes", 255)
        tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false)

        tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references()
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")

        tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references()
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")

        tbl.unique(["project_id", "resource_id"]);
    })
    .createTable("resources", tbl => {
        tbl.increments()
        tbl.string("name", 255).unique().notNullable()
        tbl.string("description", 255)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("task")
    .dropTableIfExists("projects")
};
