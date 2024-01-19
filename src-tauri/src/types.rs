use serde::{Serialize, Deserialize};

// This needs to be the same structure as `types.ts`.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Recipe {
    pub id: usize,
    pub name: String,
    pub description: String,
    pub ingredients: Vec<Ingredient>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Ingredient {
    pub id: usize,
    pub name: String,
    pub quantity: usize,
    pub unit: String,
}
