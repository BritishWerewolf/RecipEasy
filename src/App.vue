<template>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'recipes' }">Recipes</router-link>

    <router-view></router-view>
</template>
