<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const status = ref<'idle' | 'copied' | 'failed'>('idle')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const markdownSource = computed(() => {
  const source = (page.value as { markdownSource?: string }).markdownSource
  return typeof source === 'string' ? source : ''
})

const buttonText = computed(() => {
  if (status.value === 'copied') return '已复制 Markdown'
  if (status.value === 'failed') return '复制失败'
  return '复制 Markdown'
})

async function copyMarkdown() {
  if (!markdownSource.value) return

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(markdownSource.value)
    } else {
      fallbackCopy(markdownSource.value)
    }

    updateStatus('copied')
  } catch {
    updateStatus('failed')
  }
}

function fallbackCopy(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  const copied = document.execCommand('copy')
  document.body.removeChild(textarea)

  if (!copied) {
    throw new Error('Copy command failed')
  }
}

function updateStatus(nextStatus: typeof status.value) {
  status.value = nextStatus

  if (resetTimer) {
    clearTimeout(resetTimer)
  }

  resetTimer = setTimeout(() => {
    status.value = 'idle'
  }, 1800)
}
</script>

<template>
  <div v-if="markdownSource" class="copy-markdown">
    <button
      class="copy-markdown-button"
      type="button"
      :data-status="status"
      @click="copyMarkdown"
    >
      <span aria-hidden="true" class="copy-markdown-icon">
        <svg viewBox="0 0 24 24" focusable="false">
          <rect x="9" y="9" width="10" height="10" rx="2" />
          <path d="M5 15V7a2 2 0 0 1 2-2h8" />
        </svg>
      </span>
      {{ buttonText }}
    </button>
  </div>
</template>
