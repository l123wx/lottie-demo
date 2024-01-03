import { AnimationItem } from 'lottie-web'

export const playSegmentByName = (animationItem: AnimationItem, name: string, forceFlag: boolean = true) => {
    // @ts-ignore
    const markerData = animationItem.getMarkerData(name)
    if (!markerData) return

    animationItem.playSegments(
        [markerData.time, markerData.time + markerData.duration],
        forceFlag
    )
}
