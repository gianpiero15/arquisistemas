import sql from 'mssql';



const dbSettings1 = {
    user : 'serveradmin',
    password : 'aries.3103',
    server : 'arqui-sist.database.windows.net',
    database :'db-3'
};




export async function getConnec(){
    try {
        const pool = await sql.connect(dbSettings1);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

export {sql};