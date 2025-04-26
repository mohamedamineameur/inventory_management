import { database } from '../database/database.js';

export async function enableDatabase(){
  await  database.sync({force:true})
}

export async function desableDatabase (){
    await database.close();
  };