package org.vaadin.thomas;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;

/**
 * A simple template-based badge that shows links to vaadin.com when hovered
 * over.
 */
@SuppressWarnings("serial")
@Tag("vaadin-corner")
@JsModule("./src/vaadin-corner.js")
public class VaadinCorner extends PolymerTemplate<TemplateModel> {

    public VaadinCorner() {

    }
}
