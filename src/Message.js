import './Message.css';
import React from 'react';
import ButtonSend from './ButtonSend';
import UserContext from './UserContext'

class Message extends React.Component {
  state = {
    Messages: [],
    sendMessage: '',
    image:'noImage'
  }
  static contextType = UserContext
  onChange = (key, value) => {
    //this.props.updateErrorMessage(null)
    this.setState({
      [key]: value
    })
  }
  sendMsg = () => {
    const { user } = this.context
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"id":user.username,"sendTo":"bbbb","message":this.state.sendMessage,"image":this.state.image})
    }
    console.log(user.username)
    fetch("https://skbwb0u423.execute-api.ap-northeast-1.amazonaws.com/dev_amp_db",requestOptions)
    .then((response)=> response.json())
    .then((responseJson) =>{
      console.log(responseJson)
      this.componentDidMount()
      this.setState({sendMessage:""})
      console.log(this.state.sendMessage)
      this.render()
    })

  }
  
  componentDidMount() {
    const { user, isLoaded } = this.context
    console.log(this.context)
    if (isLoaded == false) {
      console.log(this.context)
      window.location.href = "/"
    } else {
      const requestOptions ={
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({"id":user.username})
      }
      console.log(user.username)
      fetch("https://769qg6p65h.execute-api.ap-northeast-1.amazonaws.com/dbread",requestOptions)
      .then(response=> response.json())
      .then(result =>{
        console.log(result)
        this.setState({Messages:result.body})
      })
    }
    //this.interval = setInterval(()=>this.componentDidMount(), 30000);
  }
  componentWillUnmount() {
    //clearInterval(this.interval);
  }

  render() {
    console.log(this.state.Messages)
    if (this.state.Messages == []) {
      return (
        <div className="App">
          <footer className="App-footer">
              <input
                id="sendMessage"
                onChange={evt => this.onChange('sendMessage', evt.target.value)}
                className="input"
                placeholder='メッセージ'
              />
              <ButtonSend
                title="Send"
                onClick={this.sendMsg}
              />
          </footer>
        </div>
      )
    } else {
        return (
          <div className="App">
            <div className="App-header">
              <ul>
                {this.state.Messages.map((Message, i) => {
                  return <li key={Message.message}>{Message.message}</li>;
                })}
              </ul>
            </div>
            <div className="App">
                <footer className="App-footer">
                    <input
                      id="sendMessage"
                      onChange={evt => this.onChange('sendMessage', evt.target.value)}
                      className="input"
                      placeholder='メッセージ'
                    />
                    <ButtonSend
                      title="Send"
                      onClick={this.sendMsg}
                    />
                </footer>
            </div>
          </div>
        )
      }
    }
  }


        // (document).ready(function()
        // $.get("", function(result1){
        //     var history = JSON.parse(result1.body);
        //     for (var i in history.Items){
        //         var item_list = JSON.stringify(history.Items[i]);
        //         var vol = JSON.parse(item_list);
        //         if (myID == vol.ID_Message){
        //             var h = '<div class="mycomment"><p>' + vol.ID_Message + '</p></div>' + vol.Time;
        //          else {
        //             var h = '<div class="balloon6"><div class="faceicon">★</div><div class="chatting"><div class="says"><p>' + vol.ID_Message + '</p></div></div></div>' + vol.Time;
        //         ;
        //         $("#testoutput2").append(h);
        //     ;
        // )

export default Message;