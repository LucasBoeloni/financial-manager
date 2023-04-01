package com.personal.service.repository;

import com.personal.service.domain.Expense;
import com.personal.service.domain.MonthYearExpense;
import com.personal.service.domain.pk.MonthYearExpensePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthYearExpenseRepository extends JpaRepository<MonthYearExpense, MonthYearExpensePK> {

}
