package com.personal.service.resource;

import com.personal.service.service.UserService;
import com.personal.service.service.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserResource {

	private final UserService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<UserDTO> getById(@PathVariable Long id) {
		return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<UserDTO> insert(@RequestBody UserDTO dto) {
		return new ResponseEntity<>(service.insert(dto), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<UserDTO> login(@RequestBody UserDTO dto) {
		return new ResponseEntity<>(service.login(dto), HttpStatus.OK);
	}

}
