package com.personal.service.domain;

import com.personal.service.domain.pk.MonthYearExpensePK;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@Setter
@Table(name = "TB_MONTH_YEAR_EXPENSE")
@IdClass(MonthYearExpensePK.class)
@Entity
@NoArgsConstructor
public class MonthYearExpense {

	@Id
	@Column(name = "TB_EXPENSE")
	private Long expenseId;

	@Id
	@Column(name = "TB_MONTH_YEAR")
	private Long monthYearId;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "TB_EXPENSE", referencedColumnName = "id", insertable = false, updatable = false)
	private Expense expense;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "TB_MONTH_YEAR", referencedColumnName = "id", insertable = false, updatable = false)
	private MonthYear monthYear;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "ID_USER", referencedColumnName = "id")
	private User user;

	public MonthYearExpense(Long expenseId, Long monthYearId, Long userId) {
		this.expenseId = expenseId;
		this.monthYearId = monthYearId;
		this.user = new User();
		this.user.setId(userId);
	}
}
