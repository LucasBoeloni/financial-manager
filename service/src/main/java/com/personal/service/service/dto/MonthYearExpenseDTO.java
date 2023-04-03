package com.personal.service.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class MonthYearExpenseDTO implements Serializable {

	private Long expenseId;

	private Long monthYearId;

	private Long userId;

}
