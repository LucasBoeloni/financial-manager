package com.personal.service.repository;

import com.personal.service.domain.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

	@Modifying
	@Query("update Expense e set e.active = false where e.id = :id")
	void deactivateExpense(@Param("id") Long id);

	@Query("select new com.personal.service.domain.Expense(e) from MonthlyExpense e where e.user.id = :userId and e.active = true " +
			"and ((:date between e.startDate and e.endDate) or (:date >= e.startDate and e.endDate is null) or (:date >= e.startDate and e.startDate = e.endDate)) ")
	List<Expense> getAllByUserAndDateFromMonthlyExpense(@Param("userId") Long userId, @Param("date") LocalDate date);
}
