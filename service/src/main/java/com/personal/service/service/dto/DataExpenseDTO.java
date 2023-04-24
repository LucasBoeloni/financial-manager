package com.personal.service.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
public class DataExpenseDTO implements Serializable {

	private Long amount;

	private BigDecimal total;

}
