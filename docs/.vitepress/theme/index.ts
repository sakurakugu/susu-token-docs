import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CopyMarkdownButton from './components/CopyMarkdownButton.vue'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(CopyMarkdownButton)
    })
  }
}
