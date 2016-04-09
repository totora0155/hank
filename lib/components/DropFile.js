import React, {Component, PropTypes} from 'React';
import Dropzone from 'react-dropzone';

export default class DropFile extends Component {
  render() {
    return (
      <Dropzone className="dropfile__box"
           onDrop={this.props.ondrop}>
        <span>Drop .md file here</span>
      </Dropzone>
    );
  }
}

DropFile.propTypes = {
  ondrop: PropTypes.func.isRequired
};
