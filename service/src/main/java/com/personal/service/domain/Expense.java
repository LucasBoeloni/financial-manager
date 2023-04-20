package com.personal.service.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "TB_EXPENSE")
@NoArgsConstructor
public class Expense {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_expense")
	@SequenceGenerator(name = "sequence_expense", allocationSize = 1, sequenceName = "sequence_expense")
	@Column(name = "ID")
	private Long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "VALUE")
	private BigDecimal value;

	@Column(name = "DATE")
	private LocalDate date;

	@Column(name = "active")
	private Boolean active;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "ID_USER", referencedColumnName = "id")
	private User user;


	public Expense(MonthlyExpense monthlyExpense) {
		this.name = monthlyExpense.getName();
		this.value = monthlyExpense.getValue();
		this.date = LocalDate.now().withDayOfMonth(monthlyExpense.getDay());
		this.user = monthlyExpense.getUser();
		this.active = monthlyExpense.getActive();
	}
}
