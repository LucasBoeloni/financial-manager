package com.personal.service.service.dto;

import com.personal.service.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ExpenseDTO implements Serializable {

	private Long id;

	private String name;

	private BigDecimal value;

	private LocalDate date;

	private UserDTO user;

}
