import './index.css'

const Message = props => {
  const {islogin} = props
  const message = islogin ? 'Welcome User' : 'Please Login'
  return <h1 className="msgg">{message}</h1>
}

export default Message
