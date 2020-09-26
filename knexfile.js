module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/projects.db3',	//	<---- this will change depending on what project you are creating
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) =>{
        conn.run('PRAGMA foreign_keys = ON', done);

        /*  
          The code above is running a SQL command that makes sense to SQLite
          it is going to tell SQLite that we intend for foreign key constraints
          to be active

          this is the enforcement of foreign keys 
        */ 
      }
    }
  },
}; 