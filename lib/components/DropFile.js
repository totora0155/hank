import React, {Component, PropTypes} from 'React';
import Dropzone from 'react-dropzone';

export default class DropFile extends Component {
  render() {
    return (
      <Dropzone className="dropfile__box"
           onDrop={this.props.ondrop}>
        <span>Open .md in the drop or click here</span>
      </Dropzone>
    );
  }
}

DropFile.propTypes = {
  ondrop: PropTypes.func.isRequired
};
