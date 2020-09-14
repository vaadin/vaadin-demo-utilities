package org.vaadin.thomas;

import com.vaadin.example.corner.VaadinCorner;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route("")
public class View extends Div {

    public View() {
        VaadinCorner corner = new VaadinCorner();
        add(corner);
    }
}
