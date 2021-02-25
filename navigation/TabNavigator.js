import React from "react";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Activity from "../screens/Activity";
import AddPost from "../screens/AddPost";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const TabNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed
    },
    Activity: {
        screen: Activity
    },
    AddPost: {
        screen: AddPost
    },
    Profile: {
        screen: Profile
    },
    Search: {
        screen: Search
    }
})

export default createAppContainer(TabNavigator)