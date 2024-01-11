<script setup lang="ts">
import { Ingredient } from '../types';

const props = defineProps({
    list: {
        required: true,
        type: Array<Ingredient>,
    }
});
</script>

<template>
    <label v-for="ingredient in props.list" class="block">
        <input type="checkbox">
        {{ ingredient.name }} ({{ `${ingredient.quantity} ${ingredient.unit}` }})
    </label>
</template>
