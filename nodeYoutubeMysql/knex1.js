// Link ..::..  https://medium.com/litslink/knex-js-tutorial-999871756f27
/**
 * Api Funcionando com Mysql
 */
var express = require('express');
var app = express();
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'crud-node'
    }
});
app.get('/clientes', async (req, res) => {
    const result = await knex
        .select('id', 'nome', 'idade', 'uf')
        .from('clientes')
    res.json({
        cliente: result
    });
});
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
});