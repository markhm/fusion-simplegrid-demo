import {css, customElement, html, LitElement, property} from 'lit-element';
// import { customElement, html, LitElement, property} from 'lit-element';
import {CSSModule} from '@vaadin/flow-frontend/css-utils';

import { sharedStyles } from '../../styles/shared-styles';
import { simplegridStyles } from '../../styles/simplegrid-styles';

@customElement('simplegrid-view')
export class SimplegridView extends LitElement {

  @property()
  title: string = '';

  render() {
    return html`
      <div class="testing">This is a test.</div>
      
      <div class="header_or_footer">
        <div class="container">
          <div class="row">
            <div class="col-12-sm">
              <h1>Header</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12-sm">
            <h1>Body</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-6-sm cell style_1">
            <h2>Cell 1</h2>
          </div>
          <div class="col-4 col-6-sm cell style_2">
            <h2>Cell 2</h2>
          </div>
          <div class="col-4 col-6-sm cell style_1">
            <h2>Cell 3</h2>
          </div>
          <div class="col-4 col-6-sm cell style_2">
            <h2>Cell 4</h2>
          </div>
          <div class="col-4 col-6-sm cell style_1">
            <h2>Cell 5</h2>
          </div>
          <div class="col-4 col-6-sm cell style_2">
            <h2>Cell 6</h2>
          </div>
        </div>
      </div>
      
      <div class="header_or_footer">
        <div class="container">
          <div class="row">
            <div class="col-12-sm">
              <h1>Footer</h1>
            </div>
          </div>
        </div>
      </div>
      
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return [
      sharedStyles,
      simplegridStyles,
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
