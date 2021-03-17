package com.example.wbdvsp2102shuyingzhengserverjava.controllers;

import com.example.wbdvsp2102shuyingzhengserverjava.models.Widget;
import com.example.wbdvsp2102shuyingzhengserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WidgetController {
    @Autowired
    WidgetService service;

    @GetMapping("/find/all/widgets")
    public List<Widget> findAllWidgets() {
        return service.findAllWidgets();
    }
}