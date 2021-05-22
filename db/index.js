const pool = require('./pool');

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now();
        return pool.query(text, params)
                        .then(res => {
                            const duration = Date.now() - start;
                            console.log(`executed query: \ntext: ${text} \n
                                        params: ${params} \nduration: ${duration} \n
                                        rows count: ${res.rowCount}`)
                            return res;
                        });
    }
}