import { jest } from "@storybook/jest";
import { createApp } from 'vue'
import { createTestingPinia } from '@pinia/testing'
import App from './App.vue'

const app = createApp(App)

app.use(createTestingPinia({ createSpy: jest.fn }))

app.mount('#app')
