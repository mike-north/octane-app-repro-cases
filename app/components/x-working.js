import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class XFooComponent extends Component {
  @tracked
  isShown = false;

  @action toggleShown() {
    this.isShown = !this.isShown;
  }
}
