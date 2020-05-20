import React from 'react';

import Aux from '../../hoc/Aux';
import styles from'./Layout.module.css';

const layout = (props) => (  
      <Aux>
            <div>ToolBar, side Drawer, Backdrop</div>
            <main className={styles.body}>
                  {props.children}
            </main>
      </Aux>
      );

export default layout;