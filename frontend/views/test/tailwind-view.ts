import {css, customElement, html, LitElement, property} from 'lit-element';
import {CSSModule} from '@vaadin/flow-frontend/css-utils';

import './grid-sample';

@customElement('tailwind-view')
export class TailwindView extends LitElement {

  @property()
  title: string = '';

  render() {
    return html`
      <grid-sample>
        
      </grid-sample>
      
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return [
      CSSModule('lumo-typography'),
      CSSModule('lumo-color'),
      css`
        :host {
          display: block;
          padding: 1em;
        }
    `];
  }
}
