import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
declare module 'vue' {
  export interface GlobalComponents {
    BaseInput: typeof BaseInput,
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton,
  }
}

