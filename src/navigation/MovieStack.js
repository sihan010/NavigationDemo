import {createStackNavigator, createAppContainer} from 'react-navigation'
import Movie from '../components/Movie/Movie'
import Details from '../components/Details/Details'

const MovieStack = createStackNavigator({
    Movie:Movie,
    Details:Details
})

export default createAppContainer(MovieStack);