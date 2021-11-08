import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
      return (
            <header className={classes.header}>
                  <div className={classes.logo}>Lecture Hall Management</div>
                  <nav>
                        <ul>
                              <li>
                                    <Link to='/lecturehall'>Allocated Lecture Halls</Link>

                              </li>
                              <li>
                                    <Link to='/lecturehall/available'>Available Lecture Halls</Link>
                              </li>
                              <li>
                                    <Link to='/lecturehall/all'>All Lecture Halls</Link>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}

export default MainNavigation;