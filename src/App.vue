<template>
    <nav class="flex flex-row gap-4">
        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'recipes' }">Recipes</router-link>

        <router-link class="link ml-auto" :to="{ name: 'profile' }">Profile</router-link>
    </nav>

    <main>
        <router-view></router-view>
    </main>
</template>

<style scoped lang="postcss">
.link {
    @apply text-white p-2 border border-red-300 dark:border-red-700 rounded-lg transition-colors duration-300;
}

.link:hover, .router-link-active {
    @apply bg-red-300 dark:bg-red-700;
}
</style>
