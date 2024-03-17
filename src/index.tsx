import { MobileApp } from "./MobileApp";
import { LogBox, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { Provider } from 'react-redux'; 
import { useEffect, useState } from "react";
import { RootNavigation } from "./app/navigations";

const App = () => {

    LogBox.ignoreAllLogs();

    // useEffect(() => {
    //     SplashScreen.hide(); //hides the splash screen on app load.
    // });

    return (
        <MobileApp>
            {/* <Provider store={store}> */}
                <RootNavigation />
            {/* </Provider> */}
        </MobileApp>
    )
}
export default App;