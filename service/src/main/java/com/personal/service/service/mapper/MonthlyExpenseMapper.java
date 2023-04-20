package com.personal.service.service.mapper;

import com.personal.service.domain.MonthlyExpense;
import com.personal.service.service.dto.MonthlyExpenseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface MonthlyExpenseMapper extends EntityMapper<MonthlyExpenseDTO, MonthlyExpense> {
}
