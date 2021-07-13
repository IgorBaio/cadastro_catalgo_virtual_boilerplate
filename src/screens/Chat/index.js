import MessageSender from '../../Components/MessageSender';
import Messages from '../../Components/Messages';
import useMessages from '../../hooks/useMessages';

import './Chat.css'

function Chat () {
  const { messages } = useMessages()

  return <div className="Chat">
    <Messages messages={messages} />
    <MessageSender />
  </div>
}

export default Chat