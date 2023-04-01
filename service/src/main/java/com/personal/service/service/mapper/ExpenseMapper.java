package com.personal.service.service.mapper;

import com.personal.service.domain.Expense;
import com.personal.service.service.dto.ExpenseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface ExpenseMapper extends EntityMapper<ExpenseDTO, Expense> {
}
