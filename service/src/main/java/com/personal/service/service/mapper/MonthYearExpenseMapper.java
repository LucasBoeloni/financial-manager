package com.personal.service.service.mapper;

import com.personal.service.domain.MonthYearExpense;
import com.personal.service.service.dto.MonthYearExpenseDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {})
public interface MonthYearExpenseMapper extends EntityMapper<MonthYearExpenseDTO, MonthYearExpense> {

	@Override
	@Mapping(source = "user.id", target = "userId")
	@Mapping(source = "monthYear.id", target = "monthYearId")
	@Mapping(source = "expense.id", target = "expenseId")
	MonthYearExpenseDTO toDto(MonthYearExpense entity);

	@InheritInverseConfiguration
	MonthYearExpense toEntity(MonthYearExpenseDTO dto);

}
