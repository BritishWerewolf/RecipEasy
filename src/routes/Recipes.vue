<script setup lang="ts">
import { Recipe } from "../types";

let recipes: Recipe[] = [
    {
        id: 1,
        name: "Lie Cake",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eveniet, aut itaque impedit iusto in, vitae rerum omnis qui, odio necessitatibus nemo doloremque harum? Id accusamus aut quo odio quod!",
        ingredients: [
            {
                "name": "flour",
                "quantity": 100,
                "unit": "grams",
            },
            {
                "name": "egg",
                "quantity": 2,
                "unit": "eggs",
            }
        ],
    },
    {
        id: 2,
        name: "Lie Cake",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eveniet, aut itaque impedit iusto in, vitae rerum omnis qui, odio necessitatibus nemo doloremque harum? Id accusamus aut quo odio quod!",
        ingredients: [
            {
                "name": "flour",
                "quantity": 100,
                "unit": "grams",
            },
            {
                "name": "egg",
                "quantity": 2,
                "unit": "eggs",
            }
        ],
    },
];
</script>

<template>
    <div>
        <router-link v-for="recipe in recipes" :to="{ name: 'recipe', params: { id: recipe.id, }, }">{{ recipe.name }}</router-link>
    </div>
</template>
