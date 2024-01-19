// This needs to be the same structure as `types.rs`.
export type Recipe = {
    "id": number;
    "name": string;
    "description": string,
    "ingredients": Ingredient[];
};

export type Ingredient = {
    "name": string;
    "quantity": number;
    "unit": string;
};
