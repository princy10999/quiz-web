import React from 'react';

class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          <li {...{ className: 'accordion-list__item' }}>
            <AccordionItem />
          </li>
        </ul>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      // props: {
      //   title
      // },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: 'accordion-item__line ' }}>
          <h3 {...{ className: 'accordion-item__title' }}>lifelines</h3>
        </div>
        <div {...{ className: 'accordion-item__inner' }}>
          <div {...{ className: 'accordion-item__content' }}>
            <div className='popup lifeline-popup'>
              <ul>
                <li className=''>
                  <span className='icon-50'></span>
                  <span>50:50</span>
                </li>
                <li className=''>
                  <span className='icon-audience-poll'></span>
                  <span>Audience Poll</span>
                </li>
                <li className=''>
                  <span className='icon-freeze-timer'></span>
                  <span>Freeze Timer</span>
                </li>
                <li className=''>
                  <span className='icon-flip-question'></span>
                  <span>Flip Question</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
