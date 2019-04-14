import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Link } from '../routes';

import { styleToolbar } from './SharedStyles';

const NavLink = styled.a`
  color: #4c4f5a;
  margin: 0px 20px 0px auto;
  padding: 5px 10px;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 16px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;

const Header = () => (
  <div>
    <Toolbar style={styleToolbar}>
      <Grid container direction="row" justify="space-around" align="center">
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Link prefetch route="/">
            <NavLink>dock90</NavLink>
          </Link>
          <Link prefetch route="/thoughts">
            <NavLink>thoughts</NavLink>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </div>
);

export default Header;
