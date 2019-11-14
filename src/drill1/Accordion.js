import React from "react";

class Accordion extends React.Component {
  state = {
    clicked: "hidden",
    currentSectionTab: 0
  };

  static defaultProps = { sections: [] };

  handleClick = index => {
    this.setState({ currentSectionTab: index });
    console.log("button clicked!", { index });
    return <p key={this.props.sections.title}>{this.props.sections.content}</p>;
  };

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick={() => this.handleClick(index)}>
        {section.title}
      </button>
    ));
  }

  renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionTab];
    return <div className="content">{currentSection.content}</div>;
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Accordion;