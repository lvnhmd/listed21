import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Promotions extends React.Component {
  constructor(options) {
    super(options);

    this.state = {
      promotions: []
    };

    this.track = this.track.bind(this);
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/promotions`).then(res => {
      const promotions = res.data;
      this.setState({ promotions });
    });
  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node;
    }
  }

  track(url) {
    return e => {
      const {
        _provider,
        _profile: { id, name }
      } = this.props.user;
      axios
        .post(`${process.env.REACT_APP_API_URL}/track`, {
          userId: `${_provider}_${id}`,
          userName: name,
          url
        })
        .then(() => {
          console.log('track entry success');
        })
        .catch(res => {
          console.log('track entry : something went wrong ', res);
        });
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.promotions.map((promotion) => (
          <Fragment key={promotion.url}>
            <div className='gallery'>
              {/* this will happen if the user is logged in */}
              {this.props.user && (
                <a
                  onClick={this.track(promotion.url)}
                  target='_blank'
                  rel='noopener noreferrer'
                  href={promotion.url}>
                  <img src={promotion.img} alt={promotion.title} />
                </a>
              )}
              {!this.props.user && (
                <Link to='/login'>
                  <img src={promotion.img} alt={promotion.title} />
                </Link>
              )}
              <div className='desc'>{promotion.title.toLowerCase()}</div>
            </div>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Promotions);
