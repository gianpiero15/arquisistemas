import {getConnection} from '../database/connection'
import { getConnec } from '../database/connection1';
import { sql } from '../database/connection';


export const getProducts = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT TOP (1000) [ProductID],[Name],[Color],[Quantity],[ModifiedDate] FROM [dbo].[MainProducts]')
    res.json(result.recordsets);
};

export const getCustomers = async (req,res) => {
    const pool = await getConnec();
    const result = await pool.request().query('SELECT TOP (1000) [Col1],[Col2],[Col3],[Col4],[Col5] FROM [dbo].[ExampleCol]')
    res.json(result.recordsets);
};



export const createNewProduct = async (req,res) => {

    const {ProductID,Name,Color,Quantity,ModifiedDate,
        Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10
    } = req.body

    console.log(ProductID,Name,Color,Quantity,ModifiedDate)

    const pool1 = await getConnection();
    let i = 0;
    while(i<100){
        await pool1.request()
        .input("ProductID",sql.Int,ProductID)
        .input("Name",sql.VarChar,Name)
        .input("Color",sql.VarChar,Color)
        .input("Quantity",sql.Int,Quantity)
        .input("ModifiedDate",sql.Date,ModifiedDate)
        .input("Col1",sql.Int,Col1)
        .input("Col2",sql.Int,Col2)
        .input("Col3",sql.Int,Col3)
        .input("Col4",sql.Int,Col4)
        .input("Col5",sql.Int,Col5)
        .input("Col6",sql.Int,Col6)
        .input("Col7",sql.Int,Col7)
        .input("Col8",sql.Int,Col8)
        .input("Col9",sql.Int,Col9)
        .input("Col10",sql.Int,Col10)
        .query('INSERT INTO [dbo].[MainProducts] (ProductID,Name,Color,Quantity,ModifiedDate,Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10) VALUES (@ProductID,@Name,@Color,@Quantity,@ModifiedDate,@Col1,@Col2,@Col3,@Col4,@Col5,@Col6,@Col7,@Col8,@Col9,@Col10)')

        i++;
    }

    res.json("end");

}

export const createNewCustomer = async (req,res) => {

    const {Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10
    } = req.body;

    const pool = await getConnec();
    let i = 0;
    while(i<100){
        await pool.request()
        .input("Col1",sql.Int,Col1)
        .input("Col2",sql.Int,Col2)
        .input("Col3",sql.Int,Col3)
        .input("Col4",sql.Int,Col4)
        .input("Col5",sql.Int,Col5)
        .input("Col6",sql.Int,Col6)
        .input("Col7",sql.Int,Col7)
        .input("Col8",sql.Int,Col8)
        .input("Col9",sql.Int,Col9)
        .input("Col10",sql.Int,Col10)
        .query('INSERT INTO [dbo].[ExampleCol] (Col1,Col2,Col3,Col4,Col5,Col6,Col7,Col8,Col9,Col10) VALUES (@Col1,@Col2,@Col3,@Col4,@Col5,@Col6,@Col7,@Col8,@Col9,@Col10)')
        i++;
    }

    res.json("end");

}
