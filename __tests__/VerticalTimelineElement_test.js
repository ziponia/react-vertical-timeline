import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';
import VerticalTimelineElement from '../src/VerticalTimelineElement';

describe('VerticalTimeline', function () {
  it('should have the vertical-timeline-element classname', function () {
    const component = renderIntoDocument(<VerticalTimelineElement />);
    findRenderedDOMComponentWithClass(component, 'vertical-timeline-element');
  });

  it('should have the vertical-timeline-element--right classname', function () {
    const component = renderIntoDocument(<VerticalTimelineElement position="right" />);
    findRenderedDOMComponentWithClass(component, 'vertical-timeline-element--right');
  });

  describe('when children is empty', function () {
    it('should have the vertical-timeline-element--no-children classname', function () {
      const component = renderIntoDocument(<VerticalTimelineElement />);
      findRenderedDOMComponentWithClass(component, 'vertical-timeline-element--no-children');
    });

    it('should have the vertical-timeline-element--no-children classname', function () {
      const componentWithDate = renderIntoDocument(<VerticalTimelineElement date="2018" />);
      findRenderedDOMComponentWithClass(componentWithDate, 'vertical-timeline-element--no-children');
    });

    it('should not have the vertical-timeline-element--no-children classname', function () {
      const component = renderIntoDocument(
        <VerticalTimelineElement>
          <div>My Child</div>
        </VerticalTimelineElement>
      );
      expect(scryRenderedDOMComponentsWithClass(component, 'vertical-timeline-element--no-children').length).toBe(0);
    });
  });
});