import React, { Component } from "react";

const DisableRightClickWrapper = (WrappedComponent) => {
  return class extends Component {
    handleContextMenu = (e) => {
      e.preventDefault();
    };

    componentDidMount() {
      window.addEventListener("contextmenu", this.handleContextMenu);
    }

    componentWillUnmount() {
      window.removeEventListener("contextmenu", this.handleContextMenu);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default DisableRightClickWrapper;
