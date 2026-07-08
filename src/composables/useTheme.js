import { ref, onMounted } from 'vue'

const THEME_KEY = 'nanodev-theme'

export function useTheme() {
  const isDark = ref(false)

  const applyTheme = (value) => {
    isDark.value = value
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem(THEME_KEY, value ? 'dark' : 'light')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark)
  })

  return {
    isDark,
    toggleTheme: () => applyTheme(!isDark.value),
  }
}
