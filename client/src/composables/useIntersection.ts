// composables/useIntersection.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersection (
    opts: IntersectionObserverInit = { threshold: 0.1 }
) {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  const handle: IntersectionObserverCallback = entries => {
    if (entries[0].isIntersecting) isVisible.value = true
  }

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(handle, opts)
    if (target.value) observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer && target.value) observer.unobserve(target.value)
  })

  return { target, isVisible }
}
