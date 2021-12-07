import React from 'react';

import { Button } from "@Aurinho97/react-component-library";
import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <div>
            <Button label="Primary" variant="primary"/>
            <Button label="Secondary" variant="secondary"/>
            <div className={styles.div}>Hello World!</div>
        </div>
    );
}

export default App;
