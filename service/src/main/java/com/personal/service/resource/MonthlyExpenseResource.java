package com.personal.service.resource;

import com.personal.service.service.MonthlyExpenseService;
import com.personal.service.service.dto.DataExpenseDTO;
import com.personal.service.service.dto.MonthlyExpenseDTO;
import com.personal.service.service.filter.MonthlyExpenseFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/monthly-expenses")
@RequiredArgsConstructor
public class MonthlyExpenseResource {

	private final MonthlyExpenseService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<MonthlyExpenseDTO> getById(@PathVariable Long id) {
		return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<MonthlyExpenseDTO> insert(@RequestBody MonthlyExpenseDTO dto, @RequestParam("user") Long userId) {
		return new ResponseEntity<>(service.insert(dto, userId), HttpStatus.CREATED);
	}

	@PutMapping()
	public ResponseEntity<MonthlyExpenseDTO> update(@RequestBody MonthlyExpenseDTO dto, @RequestParam("user") Long userId) {
		return new ResponseEntity<>(service.insert(dto, userId), HttpStatus.OK);
	}

	@PostMapping("/filter")
	public ResponseEntity<Page<MonthlyExpenseDTO>> insert(@RequestBody MonthlyExpenseFilter filter, @RequestParam("user") Long userId, Pageable pageable) {
		return new ResponseEntity<>(service.getAllFilter(filter, userId, pageable), HttpStatus.OK);
	}

	@GetMapping("/get-data")
	public ResponseEntity<DataExpenseDTO> insert(@RequestParam("user") Long userId) {
		return new ResponseEntity<>(service.getData(userId), HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<List<MonthlyExpenseDTO>> deactivateExpense(@PathVariable Long id) {
		service.deativateActive(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
