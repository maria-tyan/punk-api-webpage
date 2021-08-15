import { shallowMount } from '@vue/test-utils';
import BasicAccordion from '@/components/BasicAccordion.vue';

describe('BasicAccordion.vue', () => {
  const randomBeer = {
    name: 'Random Beer',
    tagline: 'Random Tagline',
  };
  const wrapper = shallowMount(BasicAccordion, {
    props: { beerData: randomBeer },
  });
  const button = wrapper.find('button');
  it('renders accordion name', () => {
    expect(wrapper.text()).toBe(randomBeer.name);
  });
  it('shows accordion content when button is clicked', async () => {
    await button.trigger('click');
    const taglineHeader = wrapper.find('h3');
    expect(taglineHeader.text()).toBe(randomBeer.tagline);
  });
});
