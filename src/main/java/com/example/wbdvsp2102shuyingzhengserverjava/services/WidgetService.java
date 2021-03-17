package com.example.wbdvsp2102shuyingzhengserverjava.services;

import com.example.wbdvsp2102shuyingzhengserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<>();
    {
        Widget w1 = new Widget(123l, "ABC1", "HEADING", 1, "Welcome 1");
        Widget w2 = new Widget(124l, "ABC2", "HEAD", 2, "Welcome 2");
        Widget w3 = new Widget(125l, "ABC3", "HEA", 1, "Welcome 3");
        Widget w4 = new Widget(126l, "ABC4", "HE", 1, "Welcome 4");
        Widget w5 = new Widget(127l, "ABC5", "H", 1, "Welcome 5");

        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
        widgets.add(w4);
        widgets.add(w5);
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> ws = new ArrayList<>();
        for (Widget w : widgets) {
            if (w.getTopicId().equals(topicId)) {
                ws.add(w);
            }
        }
        return ws;
    }
}
