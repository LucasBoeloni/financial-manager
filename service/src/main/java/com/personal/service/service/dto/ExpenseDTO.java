package com.personal.service.service.dto;

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
public class ExpenseDTO implements Serializable {

	private Long id;

	private String name;

	private BigDecimal value;

	private LocalDate date;

	private Long monthYearId;

	private Boolean active = true;

	private UserDTO user;

	public ExpenseDTO(Long id, String name, BigDecimal value, LocalDate date) {
		this.id = id;
		this.name = name;
		this.value = value;
		this.date = date;
	}
}
