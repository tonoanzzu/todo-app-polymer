import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `todo-app-polymer`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoAppPolymer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'todo-app-polymer',
      },
    };
  }
}

window.customElements.define('todo-app-polymer', TodoAppPolymer);
