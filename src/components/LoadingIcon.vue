<template>
    <div ref="containerRef"></div>
</template>

<script setup lang="ts">
    import { onMounted, onBeforeUnmount, ref } from 'vue'
    import Lottie, { AnimationItem } from 'lottie-web'
    import { playSegmentByName } from '../utils/lottie'
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

    onBeforeUnmount(() => {
        animate.value?.destroy()
    })

    const loading = () => {
        animate.value!.setDirection(-1)
        playSegmentByName(animate.value!, 'loading', false)
        animate.value!.setLoop(true)
    }

    const toFail = () => {
        playSegmentByName(animate.value!, 'fail', false)
        animate.value!.setLoop(false)
    }

    const toSuccess = () => {
        playSegmentByName(animate.value!, 'success', false)
        animate.value!.setLoop(false)
    }

    defineExpose({
        loading,
        toFail,
        toSuccess
    })
</script>

<style scoped></style>
