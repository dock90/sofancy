import React, { PureComponent } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { Link } from '../routes';
import client from '../client';
import withLayout from '../lib/withLayout';
import PageTitle from '../components/styled/PageTitle';
import media from '../components/styled/Media';

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  border-radius: 0 !important;
  ${media.phone`
    margin-bottom: 1rem;
  `}

  h2 {
    margin: 1rem;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.3em;

    a {
      text-decoration: none;
      color: #4c4f5a;
    }
  }
`;

class Index extends PureComponent {
  static getInitialProps = async () => ({
    posts: await client.fetch(`*[_type == "post"]`),
  });

  render() {
    const { posts = [] } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <PageTitle>Thoughts</PageTitle>
        <Grid container direction="row" align="left">
          {posts.map(
            ({ _id, title = '', slug = '', _updatedAt = '' }) =>
              slug && (
                <Grid
                  item
                  sm={3}
                  xs={12}
                  style={{ marginRight: '1.5rem', textAlign: 'left' }}
                  key={_id}
                >
                  <StyledCard elevation={4}>
                    <Link prefetch route={`/thoughts/${slug.current}`}>
                      <h2>
                        <a>{title}</a>
                      </h2>
                    </Link>
                  </StyledCard>
                </Grid>
              )
          )}
        </Grid>
      </div>
    );
  }
}

export default withLayout(Index);

Index.propTypes = {
  posts: PropTypes.array,
};
