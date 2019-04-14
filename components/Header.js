import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Link } from '../routes';

import { styleToolbar } from './SharedStyles';

const Header = () => (
  <div>
    <Toolbar style={styleToolbar}>
      <Grid container direction="row" justify="space-around" align="center">
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Link prefetch route="/">
            <a style={{ margin: '0px 20px 0px auto' }}>dock90</a>
          </Link>
          <Link prefetch route="/thoughts">
            <a style={{ margin: '0px 20px 0px auto' }}>thoughts</a>
          </Link>
        </Grid>
      </Grid>
    </Toolbar>
  </div>
);

export default Header;
