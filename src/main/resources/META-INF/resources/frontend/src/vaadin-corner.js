import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';

class VaadinCorner extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">

                :host {

        			--widget-color: #292E2D;
        			--widget-width: 380px;
        			--widget-width-phone: 98vw;

                    display: block;

        			position: absolute;
        			top: 15px;
        			right: 0;
        			background-color: var(--widget-color);

        			border-top-left-radius: 3px;
        			border-bottom-left-radius: 3px;

        			padding: 3px;
        			padding-right: 10px;

        			color: #D8DDDE !important;

        			overflow: hidden;
                }

        		#content {

        			width: 100px;
        			height: 24px;
        
        			background-image: url(https://vaadin.com/images/vaadin-logo.svg);
        			background-size: 100px;
        			background-repeat: no-repeat;
        			background-position-x: right;
        			background-position-y: 4px;

        			transition: height 0.2s, width 0.2s;
        			transition-timing-function: ease-in-out;
        			
        			padding: 3px;

        		}

        		#wrapper {
        			display: none;
        			width: var(--widget-width);
        			padding-top: 25px;
        			padding-left: 10px;
        			transition: display 0.3s;
        		}
        

        		#content:hover #wrapper, 
        		#content.initial #wrapper {
        			display:block;
        		}

        		#content:hover, 
        		#content.initial {
        			width: var(--widget-width);
        			height: 128px;
        		}

        		#wrapper a, 
        		#wrapper a:visited, 
        		#wrapper a:active, 
        		#wrapper a:focus {
        			color: var(--lumo-primary-color);
        		}

        		/* Style overrides for smaller devices */
        		@media (max-width: 600px) {

        			:host {
        				padding-right: 6px;

        			}

        			#content {

        				width: 16px;
        				height: 24px;
        				
        				border-left: 4px solid var(--widget-color);
        				
        			}

        			#wrapper {
        				width: var(--widget-width-phone);
        				padding-top: 25px;
        				padding-left: 10px;
        			}
        				
        			#content:hover, 
       				#content.initial {
       					border-left: none;
        					
       					width: var(--widget-width-phone);
       				}
        		}

            </style>

 <div id="content">
        <div id="wrapper">
        	This is an example application made with Vaadin.
        	<br/>
            <p>
        		Please visit <a href='https://vaadin.com' target='_blank'>Vaadin.com</a> for more
        		<a href='https://vaadin.com/start' target='_blank'>examples</a> 
        		<br/>
        		or to read the <a href='https://vaadin.com/docs' target='_blank'>documentation<a/>.
        	</p>
        </div>
</div>
`;
    }



    static get is() {
        return 'vaadin-corner';
    }

    static get properties() {
        return {
        };
    }
    
	ready() {
		super.ready();
	      
		var contentElem = this.$.content;
        contentElem.className = "initial";
        
        setTimeout(function(){ contentElem.className = ""; }, 3000);
	}
    
}

customElements.define(VaadinCorner.is, VaadinCorner);
