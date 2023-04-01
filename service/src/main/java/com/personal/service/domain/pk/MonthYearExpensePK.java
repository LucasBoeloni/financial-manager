package com.personal.service.domain.pk;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.io.Serializable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode()
public class MonthYearExpensePK implements Serializable {

	@Column(name = "ID_EXPENSE")
	private Long expenseId;

	@Column(name = "ID_MONTH_YEAR")
	private Long monthYearId;
}
