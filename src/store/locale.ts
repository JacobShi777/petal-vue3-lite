import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Locale = 'zh-cn' | 'en'

export const useLocaleStore = defineStore(
  'locale',
  () => {
    const locale = ref<Locale>('zh-cn')

    function setLocale(_locale: Locale) {
      locale.value = _locale
    }
    return {
      locale,
      setLocale,
    }
  },
  {
    persist: true,
  },
)
