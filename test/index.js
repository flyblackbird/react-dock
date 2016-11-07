import React from 'react/addons';
import Dock from '../src/Dock';
import { expect } from 'chai';

const TestUtils = React.addons.TestUtils;

describe('Dock component', function() {
  it('should have shallow rendering', function() {

    const shallowRenderer = TestUtils.createRenderer();
    const DockEl = <Dock />;
    shallowRenderer.render(DockEl);

    const result = shallowRenderer.getRenderOutput();

    expect(DockEl.props).to.eql({
      position: 'left',
      zIndex: 99999999,
      fluid: true,
      defaultSize: 0.3,
      dimMode: 'opaque',
      duration: 200
    });
    expect(result.type).to.equal('div');
  });

  it('renders outter wrapper with default and additional classname', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Dock outerContainerClassName='custom-class-name' />);

    expect(renderer.getRenderOutput().props.className).to.equal(
      'react-dock-outer-wrapper custom-class-name'
    );
  });

  it('renders outter wrapper with default and additional classname', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Dock innerContainerClassName='custom-class-name' />);

    const subject = renderer.getRenderOutput().props.children[1];

    expect(subject.props.className).to.equal(
      'react-dock-inner-wrapper custom-class-name'
    );
  });
});
