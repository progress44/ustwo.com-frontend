'use strict';

import React from 'react';

export default class ScreenBlock extends React.Component {
  render() {
    const classes = `screen-block ${this.props.customClass}`;
    return (
      <section className={classes}>
        {this.props.children}
      </section>
    );
  }
};