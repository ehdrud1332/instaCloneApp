import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import TabNavigator from "./navigation/TabNavigator";


const App = () => (
    <ApplicationProvider {...eva} theme={eva.light}>
            <TabNavigator />
    </ApplicationProvider>
)

export default App;
