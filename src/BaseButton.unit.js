import BaseButton from './BaseButton';

test('exports a valid component', () => {
  expect(BaseButton).toBeAComponent();
});

test('renders its slot content', () => {
  const slotContent = '<span>Button</span>'
  const { element } = shallowMount(BaseButton, {
    slots: {
      default: slotContent,
    },
  });
  expect(element.innerHTML).toContain(slotContent);
});

test('adds a "base-button" class on the root element', () => {
  const { element } = shallowMount(BaseButton);
  expect(element.classList.contains('base-button')).toBe(true);
});
