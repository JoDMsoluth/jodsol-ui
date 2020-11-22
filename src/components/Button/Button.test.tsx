import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const setup = (props={}) => {
  return shallow(<Button { ...props }>버튼</Button>)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[test-id="${val}"]`);
}

test('counter starts at 0', () => {
  const wrapper = setup();
  const buttonText = findByTestAttr(wrapper, 'button').text();
  expect(buttonText).toBe("버튼");  // do this first with an integer and show failure!
});

describe('onclick event', () => {
  // now we have enough tests to organize by function
  test('renders button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button');
    expect(button.length).toBe(1);
  });
  
  test('occur onClicked', () => {
    const wrapper = setup();
    
    // find button and click
    const button = findByTestAttr(wrapper, 'button');
    button.simulate('click');

    // check the counter
    const buttonText = findByTestAttr(wrapper, 'button').text();
    expect(buttonText).toBe("버튼");
  });
});
