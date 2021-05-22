const pool = require('./pool');

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now();
        return pool.query(text, params)
                        .then(res => {
                            const duration = Date.now() - start;
                            console.log(`executed query: \ntext: ${text} \nparams: ${params} \nduration:${duration} \nrows count: ${res.rowCount}\n\n`)
                            return res;
                        });
    }
}