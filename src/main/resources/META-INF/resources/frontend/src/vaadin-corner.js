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
        			top: 10px;
        			right: 0;
        			background-color: var(--widget-color);

        			border-top-left-radius: 7px;
        			border-bottom-left-radius: 7px;

        			padding: 9px;
        			padding-right: 10px;

        			color: #D8DDDE !important;

        			overflow: hidden;

        			z-index: 1000;
                }

        		#content {

        			width: 100px;
        			height: 24px;
        
        			background-image: url(https://vaadin.com/images/vaadin-logo.svg);
        			background-size: 100px;
        			background-repeat: no-repeat;
        			background-position-x: 6px;
        			background-position-y: 4px;

        			transition: height 0.2s, width 0.2s;
        			transition-timing-function: ease-in-out;
        			
        			padding: 3px;
        			
        			
				    font-family: Montserrat, Verdana, sans‑serif;
				    font-size: 11pt;

        		}

        		#wrapper {
        			display: none;
        			width: var(--widget-width);
        			padding-top: 36px;
        			padding-left: 4px;
        			transition: display 0.3s;
        		}
        

        		#content:hover #wrapper, 
        		#content.initial #wrapper {
        			display:block;
        		}

        		#content:hover, 
        		#content.initial {
        			width: var(--widget-width);
        			height:94px;
        		}

        		#wrapper a, 
        		#wrapper a:visited, 
        		#wrapper a:active, 
        		#wrapper a:focus {
        			color: #FFFFFF;
        			font-weight: bold;
				    text-decoration: none;
        		}
        		
        		#wrapper a.right {
        			float: right;
        			padding-right: 10px;
        		} 
        		
        		#wrapper img {
        			vertical-align: text-bottom;
        			margin-top: 10px;
        		}    
        		
        		/* Style overrides for smaller devices */
        		@media (max-width: 600px) {

        			:host {
        				padding-right: 6px;

        			}

        			#content {

        				width: 16px;
        				height: 24px;
        				
        				background-position-x: right;
        			
        				border-left: 4px solid var(--widget-color);
        				
				    	font-size: 10pt;
        			}

        			#wrapper {
        				width: var(--widget-width-phone);
        				padding-top: 35px;
        				padding-left: 10px;
        			}
        				
        			#content:hover, 
       				#content.initial {
       					border-left: none;
        				background-position-x: 12px;
        					
       					width: var(--widget-width-phone);
       				}
        		}

            </style>

 <div id="content">
        <div id="wrapper">
        	This is an example application made with <a href='https://vaadin.com' target='_blank'>Vaadin</a> 
        	<br/>
        		<a href='https://vaadin.com/start' target='_blank'>More examples <img src='frontend/external-link-alt-solid-white.svg' width='20px'></a> 
        		<a href='https://vaadin.com/docs' target='_blank' class='right'>Documentation <img src='frontend/external-link-alt-solid-white.svg' width='20px'</a>
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
