import PropTypes from 'prop-types';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

import styled from 'styled-components';
import client from '../client';
import withLayout from '../lib/withLayout';
import PageTitle from '../components/styled/PageTitle';
import media from '../components/styled/Media';

const PostTitle = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.3em;

    a {
      text-decoration: none;
    }
  }
`;

function Index(props) {
  const { posts = [] } = props;
  return (
    <div style={{ padding: '10px 45px' }}>
      <PageTitle>Thoughts</PageTitle>
      <Grid container direction="row" align="left">
        {posts.map(
          ({ _id, title = '', slug = '' }) =>
            slug && (
              <Grid item xs={12} style={{ textAlign: 'left' }} key={_id}>
                <PostTitle>
                  <Link prefetch href={`/thought/${slug.current}`}>
                    <h2>
                      <a>{title}</a>
                    </h2>
                  </Link>
                </PostTitle>
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(`*[_type == "post"]`),
});

Index.propTypes = {
  posts: PropTypes.array,
};

export default withLayout(Index);
