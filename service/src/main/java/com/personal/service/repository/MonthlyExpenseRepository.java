package com.personal.service.repository;

import com.personal.service.domain.MonthlyExpense;
import com.personal.service.service.dto.DataExpenseDTO;
import com.personal.service.service.dto.MonthlyExpenseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface MonthlyExpenseRepository extends JpaRepository<MonthlyExpense, Long> {
	@Modifying
	@Query("update MonthlyExpense me set me.active = false where me.id = :id")
	void deactivateExpense(@Param("id") Long id);


	@Query("select new com.personal.service.service.dto.MonthlyExpenseDTO(e) from MonthlyExpense e where e.user.id = :userId and e.active = true")
	Page<MonthlyExpenseDTO> getAllByUser(@Param("userId") Long userId, Pageable pageable);

	@Query("select new com.personal.service.service.dto.DataExpenseDTO(count(e),sum(e.value)) from MonthlyExpense e where e.user.id = :userId and e.active = true " +
			"and ((:date between e.startDate and e.endDate) or (:date >= e.startDate and e.endDate is null) or (:date >= e.startDate and e.startDate = e.endDate)) ")
	DataExpenseDTO getData(@Param("userId") Long userId, @Param("date") LocalDate date);

}
