import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';
import {CSSModule} from '@vaadin/flow-frontend/css-utils';

// import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import {DomModule} from "@polymer/polymer/lib/elements/dom-module";
import {stylesFromTemplate} from "@polymer/polymer/lib/utils/style-gather";

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
      
    `;
  }

  async connectedCallback() {
    super.connectedCallback();

    const importedCss = this.importSimplegrid('simple-grid.scss');
    console.log('importedCss: '+importedCss);
  }

  private importSimplegrid(filename: string) {

    const template: HTMLTemplateElement | null = DomModule.import(filename, "template") as HTMLTemplateElement;

    console.log('template: ' + template);

    const cssText =
        template &&
        stylesFromTemplate(template, "./simplegrid/")
            .map((style: HTMLStyleElement) => style.textContent)
            .join(" ");

    console.log('cssText: ' + cssText);

    return unsafeCSS(cssText);
  }
}
