import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {value: true}

  login = () => {
    this.setState(prevState => ({
      value: !prevState.value,
    }))
  }

  render() {
    const {value} = this.state

    return (
      <div className="bg">
        <Message value={value} />
        {value ? <login login={this.login} /> : <Logout logout={this.login} />}
      </div>
    )
  }
}

export default Home
