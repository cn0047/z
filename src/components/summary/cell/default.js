import BaseCell from './baseCell';
import React from 'react';

class DefaultCell extends BaseCell {

  render() {
    return (
      <div className="ssc2">
        <div className="ct">{this.props.user_id}</div>
        <img className="img" src={this.state.img} alt="" />
        <div className="cb">
          {this.props.favourited > 0 ? '⭐' : ''}
          {this.props.flamed > 0 ? '🔥' : ''}
          {this.props.visited > 0 ? '👁' : ''}
          {this.props.profile_meta_data.name}
        </div>
      </div>
    );
  }

}

export default DefaultCell;
