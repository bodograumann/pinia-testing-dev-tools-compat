import { describe, it, expect, vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      globals: { plugins: [createTestingPinia({ createSpy: vi.fn })] },
      props: { msg: 'Hello Vitest' },
    })

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
