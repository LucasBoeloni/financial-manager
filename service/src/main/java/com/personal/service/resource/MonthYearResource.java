package com.personal.service.resource;

import com.personal.service.service.MonthYearService;
import com.personal.service.service.dto.SelectionDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/month-year")
@RequiredArgsConstructor
public class MonthYearResource {

    private final MonthYearService service;

    @GetMapping(value = "/unpaged")
    public ResponseEntity<List<SelectionDTO>> getAll(@RequestParam("user") Long userId) {
        return new ResponseEntity<>(service.getAll(userId), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<SelectionDTO> insert(@RequestBody SelectionDTO dto, @RequestParam("user") Long userId) {
        return new ResponseEntity<>(service.insert(dto,userId), HttpStatus.CREATED);
    }

}
