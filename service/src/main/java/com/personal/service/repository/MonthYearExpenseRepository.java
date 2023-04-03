package com.personal.service.repository;

import com.personal.service.domain.MonthYearExpense;
import com.personal.service.domain.pk.MonthYearExpensePK;
import com.personal.service.service.dto.ExpenseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonthYearExpenseRepository extends JpaRepository<MonthYearExpense, MonthYearExpensePK> {

	@Query("SELECT new com.personal.service.service.dto.ExpenseDTO(e.id,e.name,e.value,e.date) from MonthYearExpense mye " +
			" inner join mye.expense e where mye.monthYearId = :monthYearId and mye.user.id = :userId and mye.expense.active = true")
	List<ExpenseDTO> getAllByUserAndMonth(@Param("userId") Long userId, @Param("monthYearId") Long monthYearId);

}
