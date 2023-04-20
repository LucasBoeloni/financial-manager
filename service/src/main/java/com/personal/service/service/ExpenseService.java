package com.personal.service.service;

import com.personal.service.domain.Expense;
import com.personal.service.domain.MonthYear;
import com.personal.service.domain.MonthYearExpense;
import com.personal.service.repository.ExpenseRepository;
import com.personal.service.repository.MonthYearExpenseRepository;
import com.personal.service.service.dto.ExpenseDTO;
import com.personal.service.service.mapper.ExpenseMapper;
import com.personal.service.utils.ExceptionMessageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.ws.rs.BadRequestException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ExpenseService {

	public static final int JOKER_ID = 0;
	private final ExpenseRepository repository;
	private final ExpenseMapper mapper;
	private final UserService userService;
	private final MonthYearExpenseRepository monthYearExpenseRepository;

	private Expense findById(Long id) {
		return repository.findById(id).orElseThrow(() -> new BadRequestException(ExceptionMessageUtil.ENTITY_NOT_FOUND));
	}

	public ExpenseDTO getById(Long id) {
		return mapper.toDto(findById(id));
	}

	public ExpenseDTO insert(ExpenseDTO dto, Long userId, Long monthYearId) {
		if (JOKER_ID == dto.getId()) {
			dto.setId(null);
		}
		dto.setUser(userService.getById(userId));

		Expense entity = repository.save(mapper.toEntity(dto));
		monthYearExpenseRepository.save(new MonthYearExpense(entity.getId(), monthYearId, userId));
		return mapper.toDto(entity);
	}

	public void insertBatchForMonthYear(MonthYear monthYear, Long userId) {
		List<Expense> expenses = repository.getAllByUserAndDateFromMonthlyExpense(userId, monthYear.getDate());

		expenses = repository.saveAll(expenses);
		List<MonthYearExpense> monthYearExpenses = expenses.stream().map(expense -> new MonthYearExpense(expense.getId(), monthYear.getId(), userId))
				.collect(Collectors.toList());
		monthYearExpenseRepository.saveAll(monthYearExpenses);
	}

	public List<ExpenseDTO> getAll(Long monthYearId, Long userId) {
		return monthYearExpenseRepository.getAllByUserAndMonth(userId, monthYearId);
	}

	public void deativateActive(Long id) {
		repository.deactivateExpense(id);
	}

}
