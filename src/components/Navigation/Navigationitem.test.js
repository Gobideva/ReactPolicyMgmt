import React from 'react';
import {configure, shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import Navigationitem from './NavigationItem';
import NavigationList from './NavigationList';

configure ({adapter: new Adaptor()});

describe('<Navigationitem/>', () => {
    it('It should render three <Navigationitem>', () => {

        const wrapper = shallow(<Navigationitem/>)
        expect(wrapper.find(NavigationList)).toHaveLength(3);
    });
});