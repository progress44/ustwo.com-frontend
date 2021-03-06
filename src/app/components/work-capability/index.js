import React, { Component } from 'react';
import classnames from 'classnames';
import WorkCapabilities from 'app/components/work-capabilities';
import ContactButton from 'app/components/contact-button';
import Flux from 'app/flux';

class WorkCapability extends Component {

  componentDidMount() {
    setTimeout(() => {
      Flux.visitedWorkCapabilities(true);
    }, 2000);
  }

  render() {
    const { data } = this.props;
    const blocks = data.blocks.map((block, i) => {
      const totalBlocks = data.blocks.length;
      const classes = classnames('work-capability-block', {
        last: i + 1 === totalBlocks
      });

      return (
        <div className={classes}>
          <div className="work-capability-block-text">
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </div>
          <div className="work-capability-block-image">
            <img src={block.imageURL} alt={block.title} />
          </div>
        </div>
      );
    });

    const title = data.title.split(" ").map(word => {
      return (<span>{word} </span>);
    });

    return (
      <div className="work-capability">
        <div className="work-capability-inner">
          <h1>{title}</h1>
          <WorkCapabilities selected={data.name} />
          {blocks}
          <div className="work-capability-contact">
            <p>Have a project or an idea you'd like to collaborate with ustwo on? Say hello@ustwo.com</p>
            <ContactButton />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkCapability;
