import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/pages/Home.vue'
import Vue from 'vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Home.vue', () => {
  test('Tests are working', () => {
    const Ctor = Vue.extend(Home)
    const vm = new Ctor().$mount()
      expect(vm.$el.textContent).toContain('item');
  })
})