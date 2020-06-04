import React from 'react';

import Aux from '../Aux/Aux';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import styles from'./Layout.module.css';

class Layout extends React.Component{

      state = {
            sideBarState: false
      }

      toggleSideBarState = () => {
            this.setState({sideBarState: !this.state.sideBarState});
      }

      render() {
            return (
                  <Aux>
                        <SideDrawer sideBarState={this.state.sideBarState} toggleSideBar={this.toggleSideBarState}/>
                        <ToolBar toggleSideBar={this.toggleSideBarState}/>
                        <main className={styles.Content}>
                              {this.props.children}
                        </main>
            </Aux>
            )
      };
}

export default Layout;