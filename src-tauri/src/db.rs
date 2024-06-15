use surrealdb::{Surreal, engine::remote::ws::{Ws, Client}, opt::auth::Root};
use crate::types::*;

async fn connect_to_db() -> surrealdb::Result<Surreal<Client>> {
    let db = Surreal::new::<Ws>("127.0.0.1:8000").await?;

    db.signin(Root {
        username: "root",
        password: "root",
    })
    .await?;

    db.use_db("dev.db").await?;

    Ok(db)
}

async fn create_recipe()  -> surrealdb::Result<()> {
    let db = connect_to_db().await?;

    let recipe = db.create("recipe")
    .content(Recipe {
        name: "Test".to_owned(),
    })
    .await?;

    Ok(())
}

#[tauri::command]
pub fn get_recipes() -> Option<Vec<Recipe>> {
    None
}
