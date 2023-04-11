package com.personal.service.domain;

import lombok.Getter;
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
@Table(name = "TB_MONTHLY_EXPENSE")
public class MonthlyExpense {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_monthly_expense")
	@SequenceGenerator(name = "sequence_monthly_expense", allocationSize = 1, sequenceName = "sequence_monthly_expense")
	@Column(name = "ID")
	private Long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "VALUE")
	private BigDecimal value;

	@Column(name = "END_DATE")
	private LocalDate endDate;

	@Column(name = "START_DATE")
	private LocalDate startDate;

	@Column(name = "DAY")
	private Integer day;

	@Column(name = "active")
	private Boolean active;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "ID_USER", referencedColumnName = "id")
	private User user;

}
