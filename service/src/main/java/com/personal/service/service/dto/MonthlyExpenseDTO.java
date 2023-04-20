package com.personal.service.service.dto;

import com.personal.service.domain.MonthlyExpense;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyExpenseDTO implements Serializable {

	private Long id;

	private String name;

	private BigDecimal value;

	private LocalDate endDate;

	private LocalDate startDate;

	private Integer day;

	private Boolean active = true;

	private UserDTO user;

	public MonthlyExpenseDTO(MonthlyExpense entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.value = entity.getValue();
		this.endDate = entity.getEndDate();
		this.startDate = entity.getStartDate();
		this.day = entity.getDay();
	}
}
