import AbstractLinkShareButton from './AbstractLinkShareButton';
import EventHandler from './EventHandler';


export default class ShareButtonLinkedin extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}