import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class XFooComponent extends Component {
  @tracked
  isShown = false;
}
