import sql from "better-sqlite3"
const db = sql(`meals.db`)

export async function getMeals (){

    
   

    return db.prepare(`select * from meals`).all();

}

export async function getMeal(slug) {
    return db.prepare(`select * from meals where slug = ? `).get(slug);
}