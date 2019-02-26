import {createDrawerNavigator, createAppContainer} from 'react-navigation'

import MovieStack from './MovieStack'
import NewsStack from './NewsStack'

const DrawerNavigator = createDrawerNavigator(
    {
        NewsStack:NewsStack,
        MovieStack:MovieStack
    },
    {
        initialRouteName: "MovieStack"
    }
)

export default createAppContainer(DrawerNavigator);