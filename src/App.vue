<template>
    <div class="animation-container">
        <LoadingIcon ref="loadingIconRef" />
    </div>

    <div class="operation">
        <button @click="handleLoadingClick">loading</button>
        <button @click="handleFailClick">fail</button>
        <button @click="handleSuccessClick">success</button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import LoadingIcon from './components/LoadingIcon.vue'

    const loadingIconRef = ref<InstanceType<typeof LoadingIcon>>()

    const handleLoadingClick = () => {
        loadingIconRef.value!.loading()
    }
    const handleFailClick = () => {
        loadingIconRef.value!.toFail()
    }
    const handleSuccessClick = () => {
        loadingIconRef.value!.toSuccess()
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
</style>

<style scoped>
    .animation-container {
        width: 100px;
        height: 100px;
        background-color: #aeaeae;
        display: flex;
        align-items: center;
    }
    .operation {
        width: 300px;
        display: flex;
        justify-content: space-between;
    }
    .operation > button {
        width: 100px;
        height: 30px;
    }
</style>
