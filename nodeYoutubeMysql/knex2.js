// Link ..::..   https://zetcode.com/javascript/knex/
const options = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'crud-node'
    }
}

const knex = require('knex')(options);
/**
const cliente = [
    { nome: 'Maria Fátima', idade: 20, uf: 'go' },
    { nome: 'Maria Julia',  idade: 21, uf: 'df' },
    { nome: 'Eduardo Du',   idade: 30, uf: 'sp' }
]

knex('clientes').insert(cliente).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
});
*/
knex.from('clientes').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`Código: ${row['id']} Nome: ${row['nome']} Idade: ${row['idade']} Estado: ${row['uf']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
});