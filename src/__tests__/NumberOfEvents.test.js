import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component unit test', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

   test('component render input field', () => {
     expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
   });


   test('state (given from parent as prop) of eventCounter is 32 by default', () => {
     const eventCounter = NumberOfEventsWrapper.prop('eventCounter');
     expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(eventCounter);
   });

})