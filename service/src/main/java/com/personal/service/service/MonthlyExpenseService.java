package com.personal.service.service;

import com.personal.service.domain.MonthlyExpense;
import com.personal.service.repository.MonthlyExpenseRepository;
import com.personal.service.service.dto.DataExpenseDTO;
import com.personal.service.service.dto.MonthlyExpenseDTO;
import com.personal.service.service.mapper.MonthlyExpenseMapper;
import com.personal.service.utils.ExceptionMessageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.ws.rs.BadRequestException;
import java.time.LocalDate;
import java.util.Objects;

@Service
@Transactional
@RequiredArgsConstructor
public class MonthlyExpenseService {

	public static final int FIRST_DAY_OF_MONTH = 1;
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
		dto.setStartDate(dto.getStartDate().withDayOfMonth(FIRST_DAY_OF_MONTH));
		if (Objects.nonNull(dto.getEndDate())) {
			dto.setEndDate(dto.getEndDate().withDayOfMonth(FIRST_DAY_OF_MONTH));
		}
		MonthlyExpense entity = repository.save(mapper.toEntity(dto));
		return mapper.toDto(entity);
	}

	public Page<MonthlyExpenseDTO> getAll(Long userId, Pageable pageable) {
		return repository.getAllByUser(userId, pageable);
	}

	public DataExpenseDTO getData(Long userId) {
		return repository.getData(userId, LocalDate.now().withDayOfMonth(FIRST_DAY_OF_MONTH));
	}

	public void deativateActive(Long id) {
		repository.deactivateExpense(id);
	}

}
