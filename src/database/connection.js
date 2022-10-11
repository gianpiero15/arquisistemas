import sql from 'mssql';

const dbSettings = {
    user : 'serveradmin',
    password : 'aries.3103',
    server : 'arqui-sist.database.windows.net',
    database :'db-2'
};

const dbSettings1 = {
    user : 'serveradmin',
    password : 'aries.3103',
    server : 'arqui-sist.database.windows.net',
    database :'db-3'
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

export async function getConnection1(){
    try {
        const pool = await sql.connect(dbSettings1);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

export {sql};
