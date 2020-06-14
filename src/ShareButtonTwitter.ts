import AbstractlinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';

export default class ShareButtonTwitter extends AbstractlinkShareButton {

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
    }
}