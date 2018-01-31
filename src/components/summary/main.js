import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Cell from './cellDefault';

class Main extends Component {

  render() {
    let favourite = [];
    let flame = [];
    let visit = [];
    this.props.summary.relationships.forEach((r) => {
      if (r.user_id === this.props.me.user_id) {
        switch (r.type_id) {
          case 200902:
            favourite.push(r.to_user_id);
            break;
          case 200903:
            flame.push(r.to_user_id);
            break;
          case 200907:
            visit.push(r.to_user_id);
            break;
        }
      }
    });
    let cells = [];
    this.props.summary.users.forEach((user) => {
      let f = favourite.indexOf(user.user_id);
      let fl = flame.indexOf(user.user_id);
      let v = visit.indexOf(user.user_id);
      cells.push(<Cell {...user} key={user.user_id} favourited={f} flamed={fl} visited={v} />);
    });
    return (
      <div>{cells}</div>
    );
  }

}

Main.propTypes = {
  me: PropTypes.shape({
    user_id: PropTypes.number,
  }),
  summary: PropTypes.shape({
    relationships: PropTypes.object,
    users: PropTypes.object,
  }),
};

export default Main;
