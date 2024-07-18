import pool from "../configs/database";

export const findAll= async ()=>{
    const query = "SELECT * FROM persons";
    return await pool.execute(query);
}