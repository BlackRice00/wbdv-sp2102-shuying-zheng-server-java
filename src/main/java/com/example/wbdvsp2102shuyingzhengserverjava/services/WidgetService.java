package com.example.wbdvsp2102shuyingzhengserverjava.services;

import com.example.wbdvsp2102shuyingzhengserverjava.models.Widget;
import com.example.wbdvsp2102shuyingzhengserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    @Autowired
    WidgetRepository repository;

//    public WidgetService(WidgetRepository repository) {
//        this.repository = repository;
//    }

//    private List<Widget> widgets = new ArrayList<>();
//    {
//        Widget w1 = new Widget(123l, "ABC1", "HEADING", 1, "Welcome 1");
//        Widget w2 = new Widget(124l, "ABC2", "PARAGRAPH", 2, "Welcome 2");
//        Widget w3 = new Widget(125l, "ABC3", "HEADING", 1, "Welcome 3");
//        Widget w4 = new Widget(126l, "ABC4", "PARAGRAPH", 1, "Welcome 4");
//        Widget w5 = new Widget(127l, "ABC5", "PARAGRAPH", 1, "Welcome 5");
//
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
//        widgets.add(w5);
//    }

    public Widget createWidgetForTopic(String topicId, Widget widget) {
        widget.setTopicId(topicId);

        // insert statement
        return repository.save(widget);

//        widget.setId((new Date()).getTime());
//        widgets.add(widget);
//        return widget;
    }

    public List<Widget> findAllWidgets() {
//        return widgets;
        return (List<Widget>)repository.findAll();
    }

    public List<Widget> findWidgetsForTopic(String topicId) {

        return repository.findWidgetsForTopic(topicId);
//        List<Widget> ws = new ArrayList<>();
//        for (Widget w : widgets) {
//            if (w.getTopicId().equals(topicId)) {
//                ws.add(w);
//            }
//        }
//        return ws;
    }

    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
//        int index = -1;
//        for (int i = 0; i < widgets.size(); ++i) {
//            if (widgets.get(i).getId().equals(id)) {
//                index = i;
//                widgets.remove(index);
//                return 1;
//            }
//        }
        return 1;
    }

    public Integer updateWidget(Long id, Widget widget) {
        Widget originalWidget = repository.findById(id).get();

        // TODO: copy all the other fields testing for null
        if (widget.getTopicId() != null) {
            originalWidget.setTopicId(widget.getTopicId());
        }
        if (widget.getSize() != null) {
            originalWidget.setSize(widget.getSize());
        }
        if (widget.getType() != null) {
            originalWidget.setType(widget.getType());
        }
        if (widget.getText() != null) {
            originalWidget.setText(widget.getText());
        }
        if (widget.getHeight() != null) {
            originalWidget.setHeight(widget.getHeight());
        }
        if (widget.getWidth() != null) {
            originalWidget.setWidth(widget.getWidth());
        }
        if (widget.getOrdered() != null) {
            originalWidget.setOrdered(widget.getOrdered());
        }
        if (widget.getSrc() != null) {
            originalWidget.setSrc(widget.getSrc());
        }

        repository.save(originalWidget);
        return 1;
//        for (int i = 0; i < widgets.size(); ++i) {
//            if (widgets.get(i).getId().equals(id)) {
//                widgets.set(i, widget);
//                return 1;
//            }
//        }
//        return 0;
    }

//    public Widget findWidgetById(Long id) {
//        for (int i = 0; i < widgets.size(); ++i) {
//            if (widgets.get(i).getId().equals(id)) {
//                return widgets.get(i);
//            }
//        }
//        return null;
//    }
}
