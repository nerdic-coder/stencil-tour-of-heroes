import { Component, State } from '@stencil/core';
import { MessageService } from '../../services/message.service';

@Component({
  tag: 'app-messages',
  styleUrl: 'messages.css'
})
export class Messages {

  private messageService: MessageService;
  @State() private messages: string[];

  constructor() {
    this.messageService = MessageService.Instance;
  }

  componentWillLoad() {
    this.getMessages();
  }

  getMessages(): void {
    this.messageService.getMessages()
      .subscribe(messages => {
        this.messages = [];
        this.messages = messages;
      });
  }

  render() {
    return (
<div class='app-messages'>
Messages:
  {this.messages ?
    (
      <button class="clear"
        onClick={() => this.messageService.clear()}>clear</button>
    ) : ( null )
  }
  {this.messages ?
    (
      this.messages.map((message) =>
        <p>{message}</p>
      )
    ) : ( null )
  }
</div>
    );
  }

}
