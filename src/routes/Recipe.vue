<script setup lang="ts">
import IngredientsChecklist from '../components/IngredientsChecklist.vue';
import { Ingredient } from '../types';

let ingredients: Ingredient[] = [
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
];

let instructions: string[] = [
    "Crack the egg.",
    "Mix egg in a bowl.",
    "Add flour.",
    "Bake.",
];
</script>

<template>
    <div>
        <h1 class="font-bold">{{ $route.params.id }} Lie Cake</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eveniet, aut itaque impedit iusto in, vitae rerum omnis qui, odio necessitatibus nemo doloremque harum? Id accusamus aut quo odio quod!</p>
    </div>

    <div>
        <h2>Ingredients</h2>
        <IngredientsChecklist :list="ingredients"></IngredientsChecklist>
    </div>

    <div class="mt-4">
        <h2 class="font-bold">Instuctions</h2>
        <ol class="list-inside list-decimal">
            <li v-for="step in instructions">{{ step }}</li>
        </ol>
    </div>
</template>
