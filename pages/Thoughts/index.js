import React, { PureComponent } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
import client from '../../client';
import withLayout from '../../lib/withLayout';

class Index extends PureComponent {
  static getInitialProps = async () => ({
    posts: await client.fetch(`*[_type == "post"]`),
  });

  render() {
    const { posts = [] } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <h1>Thoughts</h1>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link prefetch route={`/thoughts/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({format(_updatedAt, 'DD. MMMM, YYYY')})
              </li>
            )
        )}
      </div>
    );
  }
}

export default withLayout(Index);

Index.propTypes = {
  posts: PropTypes.array,
};
