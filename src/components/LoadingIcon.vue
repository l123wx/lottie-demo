<template>
    <div ref="containerRef"></div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import Lottie, { AnimationItem } from 'lottie-web'
    import AnimationJSON from '../assets/Animation.json'

    const animate = ref<AnimationItem>()
    const containerRef = ref()

    onMounted(() => {
        animate.value = Lottie.loadAnimation({
            animationData: AnimationJSON,
            renderer: 'svg',
            autoplay: false,
            container: containerRef.value
        })


        animate.value.goToAndPlay('loading', true)
    })

    const loading = () => {
        console.log(animate.value!.segments)
        animate.value!.setDirection(-1)
        animate.value!.playSegments([0, 35])
        animate.value!.setLoop(true)
    }

    const toFail = () => {
        animate.value!.playSegments([128, 180])
        animate.value!.setLoop(false)
    }

    const toSuccess = () => {
        animate.value!.playSegments([70, 127])
        animate.value!.setLoop(false)
    }

    const handleLoadingClick = () => {
        // animate.value!.goToAndPlay('loading', false)
        animate.value!.setDirection(-1)
        animate.value!.playSegments([0, 35])
        animate.value!.setLoop(true)
    }
    const handleFailClick = () => {
        // animate.value!.goToAndPlay('fail', false)
        animate.value!.playSegments([128, 180])
        animate.value!.setLoop(false)
    }
    const handleSuccessClick = () => {
        // animate.value!.goToAndPlay('success', false)
        animate.value!.playSegments([70, 127])
        animate.value!.setLoop(false)
    }
</script>

<style scoped></style>
