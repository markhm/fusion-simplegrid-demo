import {css, customElement, html, LitElement, property} from 'lit-element';
import {CSSModule} from '@vaadin/flow-frontend/css-utils';

@customElement('simplegrid-view')
export class SimplegridView extends LitElement {

  @property()
  title: string = '';

  static get styles() {
    return [
      CSSModule('lumo-typography'),
      CSSModule('lumo-color'),
      CSSModule('lumo-badge'),
      css`
        :host {
          display: block;
          padding: 1em;
        }
    `];
  }

  render() {
    return html`
      <h3>Simplegrid</h3>
      <div>test</div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
  }
}
