import { ref, onMounted, onUnmounted } from 'vue'

export function useCounter(target, duration = 1400) {
  const value = ref(0)
  let raf = 0

  const start = () => {
    const startTime = performance.now()
    const step = (current) => {
      const progress = Math.min((current - startTime) / duration, 1)
      value.value = Math.floor(progress * target)
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
  }

  onMounted(start)
  onUnmounted(() => cancelAnimationFrame(raf))

  return value
}
