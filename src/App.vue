<template>
    <div
        ref="containerRef"
        class="animation-container"
    ></div>

    <div class="operation">
        <button @click="handleLoadingClick">loading</button>
        <button @click="handleFailClick">fail</button>
        <button @click="handleSuccessClick">success</button>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import Lottie, { AnimationItem } from 'lottie-web'
    import AnimationJSON from './assets/Animation.json'

    const animate = ref<AnimationItem>()
    const containerRef = ref()

    const playSegmentByName = (name: string, forceFlag: boolean = true) => {
        // @ts-ignore
        const markerData = animate.value.getMarkerData(name)
        console.log('%c [ markerData ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', markerData, forceFlag)

        if (!markerData) return

        animate.value!.playSegments([markerData.time, markerData.time + markerData.duration], forceFlag)
        console.log(animate.value)
    }

    onMounted(() => {
        animate.value = Lottie.loadAnimation({
            animationData: AnimationJSON,
            renderer: 'svg',
            autoplay: false,
            container: containerRef.value
        })
        animate.value.goToAndPlay('loading', true)
    })

    const handleLoadingClick = () => {
        animate.value!.setDirection(-1)
        // animate.value!.goToAndPlay('loading', false)
        // animate.value!.playSegments([0, 35])
        playSegmentByName('loading', false)
        animate.value!.setLoop(true)
    }
    const handleFailClick = () => {
        // animate.value!.goToAndPlay('fail', false)
        // animate.value!.playSegments([128, 180])
        // console.log(animate.value!.segments)
        playSegmentByName('fail', false)
        animate.value!.setLoop(false)
    }
    const handleSuccessClick = () => {
        // animate.value!.goToAndPlay('success', false)
        // animate.value!.playSegments([70, 127])
        playSegmentByName('success', false)
        animate.value!.setLoop(false)
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
