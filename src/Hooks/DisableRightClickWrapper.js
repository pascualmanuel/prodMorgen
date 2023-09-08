import React, { Component } from "react";

const DisableRightClickWrapper = (WrappedComponent) => {
  return class extends Component {
    handleContextMenu = (e) => {
      e.preventDefault();
    };

    handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    componentDidMount() {
      window.addEventListener("contextmenu", this.handleContextMenu);
      window.addEventListener("touchstart", this.handleTouchStart, {
        passive: false,
      });
    }

    componentWillUnmount() {
      window.removeEventListener("contextmenu", this.handleContextMenu);
      window.removeEventListener("touchstart", this.handleTouchStart);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default DisableRightClickWrapper;
