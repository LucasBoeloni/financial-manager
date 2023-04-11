package com.personal.service.service;

import com.personal.service.domain.MonthlyExpense;
import com.personal.service.repository.MonthlyExpenseRepository;
import com.personal.service.service.dto.MonthlyExpenseDTO;
import com.personal.service.service.mapper.MonthlyExpenseMapper;
import com.personal.service.utils.ExceptionMessageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.ws.rs.BadRequestException;

@Service
@Transactional
@RequiredArgsConstructor
public class MonthlyExpenseService {

	private final MonthlyExpenseRepository repository;
	private final MonthlyExpenseMapper mapper;
	private final UserService userService;

	private MonthlyExpense findById(Long id) {
		return repository.findById(id).orElseThrow(() -> new BadRequestException(ExceptionMessageUtil.ENTITY_NOT_FOUND));
	}

	public MonthlyExpenseDTO getById(Long id) {
		return mapper.toDto(findById(id));
	}

	public MonthlyExpenseDTO insert(MonthlyExpenseDTO dto, Long userId) {
		dto.setUser(userService.getById(userId));

		MonthlyExpense entity = repository.save(mapper.toEntity(dto));
		return mapper.toDto(entity);
	}

	public Page<MonthlyExpenseDTO> getAll(Long userId, Pageable pageable) {
		return repository.getAllByUser(userId,pageable);
	}

	public void deativateActive(Long id) {
		repository.deactivateExpense(id);
	}

}