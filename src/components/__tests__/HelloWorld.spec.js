import { describe, it, expect, vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '@/stores/counter'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

globalThis.window = {}

describe('HelloWorld', () => {
  it('renders properly', () => {
    const pinia = createTestingPinia({ createSpy: vi.fn })
    const wrapper = mount(HelloWorld, {
      globals: { plugins: [pinia] },
      props: { msg: 'Hello Vitest' },
    })

    const store = useCounterStore()
    store.increment.mockImplementation(() => {})

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
