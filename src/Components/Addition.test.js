import Add from './Addition';
import Form from './Form';
import { mount, shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Add />);
});

describe('<Addition /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

it('should render one <Form>', () => {
        expect(wrapper.find(Form)).toHaveLength(1);
    });

it('should render 2 <label>s', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });
});