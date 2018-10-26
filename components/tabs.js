import { PureComponent } from 'react';
import Router from 'next/router';
import GithubSlugger from 'github-slugger';

export default class Tabs extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      selected: props.data[0]
    };
  }
  componentDidMount() {
    const slugger = new GithubSlugger();

    if (this.props.anchor) {
      let index = this.props.data
        .map(tab => slugger.slug(tab))
        .indexOf(window.location.hash.slice(1));
      if (index !== -1) {
        this.setState({
          selected: this.props.data[index]
        });
      }
    }
  }

  onSelect = id => {
    if (this.props.data.indexOf(id) === -1) {
      return;
    }
    if (this.state.selected === id) {
      return;
    }
    if (this.props.anchor) {
      // wait 300ms for re-render
      // for the performance reason
      setTimeout(() => {
        const slugger = new GithubSlugger();

        Router.replace(
          window.location.pathname,
          window.location.pathname + '#' + slugger.slug(id),
          { shallow: true }
        );
      }, 300);
    }
    this.setState({
      selected: id
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        selected: this.props.data[0]
      });
    }
  }

  render() {
    const { data, anchor, children } = this.props;
    if (!data.length) {
      return null;
    }

    let { selected } = this.state;
    const index = data.indexOf(selected);
    if (index === -1) {
      selected = data[0];
    }

    if (typeof children !== 'function') {
      return null;
    }
    return children(this.onSelect, selected, index);
  }
}
