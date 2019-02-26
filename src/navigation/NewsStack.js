import {createStackNavigator, createAppContainer} from 'react-navigation'
import Headline from '../components/Headlines/Headlines'
import News from '../components/News/News'

const NewsStack = createStackNavigator({
    Headline:Headline,
    News:News
})

export default createAppContainer(NewsStack);