package com.recipe.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloJavaController {

    @GetMapping("/java")
    public String getMessage() {
        return "Hello from Java!";
    }
}
