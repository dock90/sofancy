import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Link } from '../routes';
import media from "./styled/Media";

import { styleToolbar } from './styled/SharedStyles';

const NavLink = styled.a`
  color: #4c4f5a;
  margin: 0px 20px 0px auto;
  padding: 5px 10px;
  transition: all 100ms ease 0s;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Roboto, Oxygen, Ubuntu, 'Open Sans', sans-serif;

  ${media.phone`
  margin: 0px 10px 0px auto;
  `}
`;

const Header = () => (
  <div>
    <Toolbar style={styleToolbar}>
      <Grid container direction="row" justify="space-between" align="center">
        <Grid item sm={1} xs={2} style={{ textAlign: 'left' }}>
          <Link prefetch route="/">
            <NavLink>dock90</NavLink>
          </Link>
        </Grid>
        <Grid item sm={9} xs={10} style={{ textAlign: 'right' }}>
          {/* <Link prefetch route="/services">
            <NavLink>services</NavLink>
          </Link> */}
          <Link prefetch route="/thoughts">
            <NavLink>thoughts</NavLink>
          </Link>
          <Link prefetch route="/start">
            <NavLink>start a project</NavLink>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </div>
);

export default Header;
