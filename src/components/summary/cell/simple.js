import BaseCell from './baseCell';
import React from 'react';

class SimpleCell extends BaseCell {

  render() {
    return (
      <div className="ssc3">
        <img className="img" src={this.state.img} alt="" />
        <div className="cb">
          {this.props.profile_meta_data.name}
        </div>
      </div>
    );
  }

}

export default SimpleCell;
