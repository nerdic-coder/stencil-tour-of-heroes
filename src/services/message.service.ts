import { Observable, Subject } from 'rxjs';

export class MessageService {

  private static _instance: MessageService;

  private messages: string[] = [];
  private subject: Subject<string[]> = new Subject();

  add(message: string) {
    this.messages.push(message);
    this.subject.next(this.messages);
  }

  clear() {
    this.messages = [];
    this.subject.next(this.messages);
  }

  getMessages(): Observable<string[]> {
    return this.subject.asObservable();
  }

  public static get Instance(): MessageService {
      // Do you need arguments? Make it a regular method instead.
      return this._instance || (this._instance = new this());
  }
}
