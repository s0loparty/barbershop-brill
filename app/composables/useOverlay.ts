import type { Ref } from 'vue'

// Each overlay owns its keyboard handler and restores focus/scroll on close or unmount.
export function useOverlay(open: Readonly<Ref<boolean>>, element: Ref<HTMLElement | null>, close: () => void) {
  let previousFocus: HTMLElement | null = null
  let previousOverflow = ''
  let locked = false

  function restore() {
    if (!locked) return
    document.body.style.overflow = previousOverflow
    previousFocus?.focus({ preventScroll: true })
    locked = false
  }

  function onKeydown(event: KeyboardEvent) {
    if (!open.value) return
    if (event.key === 'Escape') close()
    if (event.key !== 'Tab' || !element.value) return
    const controls = [...element.value.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]')]
      .filter(control => control.getClientRects().length > 0)
    const first = controls[0]
    const last = controls.at(-1)
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
    watch(open, async (value) => {
      if (value) {
        previousFocus = document.activeElement as HTMLElement | null
        previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        locked = true
        await nextTick()
        if (open.value) element.value?.querySelector<HTMLElement>('button, a[href]')?.focus({ preventScroll: true })
      } else restore()
    }, { immediate: true, flush: 'post' })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    restore()
  })
}
