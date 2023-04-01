package com.personal.service.service.mapper;

import com.personal.service.domain.MonthYearExpense;
import com.personal.service.service.dto.MonthYearExpenseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface MonthYearExpenseMapper extends EntityMapper<MonthYearExpenseDTO, MonthYearExpense> {
}
