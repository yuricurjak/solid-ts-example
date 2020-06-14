import AbstractShareButton from './AbstractShareButton';
import EventHandler from './EventHandler';


export default class ShareButtonTwitter extends AbstractShareButton {

  constructor(eventHandler:EventHandler, className: string) {
    super(eventHandler, className);
  }

  createAction() {
    return () => window.print();
  }
}