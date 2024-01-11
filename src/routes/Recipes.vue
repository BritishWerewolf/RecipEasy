<template>
    <div>
        <router-link :to="{ name: 'recipe', params: { id: 1, }, }">First</router-link>
        <router-link :to="{ name: 'recipe', params: { id: 2, }, }">Second</router-link>
    </div>
</template>
