package com.example.wbdvsp2102shuyingzhengserverjava.repositories;

import com.example.wbdvsp2102shuyingzhengserverjava.models.Widget;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface WidgetRepository
    extends CrudRepository<Widget, Long> {

}
