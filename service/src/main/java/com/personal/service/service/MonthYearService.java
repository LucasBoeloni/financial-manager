package com.personal.service.service;

import com.personal.service.domain.MonthYear;
import com.personal.service.domain.User;
import com.personal.service.repository.MonthYearRepository;
import com.personal.service.service.dto.SelectionDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MonthYearService {

	private final MonthYearRepository repository;

	private final ExpenseService expenseService;

	public SelectionDTO insert(SelectionDTO dto, Long userId) {
		MonthYear entity = new MonthYear();
		entity.setUser(new User());
		entity.getUser().setId(userId);
		entity.setName(dto.getLabel());
		entity.setDate(LocalDate.now().withDayOfMonth(1));

		entity = repository.save(entity);
		expenseService.insertBatchForMonthYear(entity, userId);
		dto.setValue(entity.getId());
		return dto;
	}

	public List<SelectionDTO> getAll(Long userId) {
		return repository.getAllSelection(userId);
	}

}
