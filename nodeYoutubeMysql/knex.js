// https://zetcode.com/javascript/knex/
const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'crud-node'
    }
}

const knex = require('knex')(options);

knex.from('clientes').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`Código: ${row['id']} Nome: ${row['nome']} Idade: ${row['idade']} Estado: ${row['uf']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });