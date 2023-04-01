package com.personal.service.resource;

import com.personal.service.service.ExpenseService;
import com.personal.service.service.dto.ExpenseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/expenses")
@RequiredArgsConstructor
public class ExpenseResource {

    private final ExpenseService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<ExpenseDTO> getById(@PathVariable Long id) {
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<ExpenseDTO> insert(@RequestBody ExpenseDTO dto) {
        return new ResponseEntity<>(service.insert(dto), HttpStatus.CREATED);
    }

}
