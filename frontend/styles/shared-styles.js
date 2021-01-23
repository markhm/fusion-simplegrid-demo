// eagerly import theme styles so as we can override them
import '@vaadin/vaadin-lumo-styles/all-imports';

// import { html } from @polymer/polymer/polymer-element.js;

const $_documentContainer = document.createElement('template');

//
$_documentContainer.innerHTML = `
    <custom-style> 
        <style>
            
            .testing {
                color: darkred;
                font-weight: bold;
            }
            
        </style>
    </custom-style>
`;

//

document.head.appendChild($_documentContainer.content);
