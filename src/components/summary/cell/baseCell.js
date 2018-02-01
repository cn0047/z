import AWS from 'aws-sdk';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import config from './../../../config/main';

class BaseCell extends Component {

  constructor(props) {
    super(props);
    this.state = {img: '', data: props};
  }

  componentDidMount() {
    const s3 = new AWS.S3();
    const p = this.state.data.pictures[0];
    const args = {
      Bucket: config.aws.bucket,
      Key: this.state.data.bucket_folder + '/public/' + p.file_name.replace('.jpg', '_thumbnail.jpg')
    };
    const that = this;
    s3.getSignedUrl('getObject', args, (err, url) => {
      if (err) {
        that.setState({img: ''});
      }
      that.setState({img: url});
    });
  }

}

BaseCell.propTypes = {
  user_id: PropTypes.number,
  favourited: PropTypes.number,
  flamed: PropTypes.number,
  visited: PropTypes.number,
  profile_meta_data: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default BaseCell;
