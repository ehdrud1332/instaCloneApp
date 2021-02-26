import React, { Fragment } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import TabNavigator from "./navigation/TabNavigator";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Firebase, { FirebaseProvider } from './utils';


const App = () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
            <FirebaseProvider value={Firebase}>
                <TabNavigator />
            </FirebaseProvider>
        </ApplicationProvider>
    </>

)

export default App;
