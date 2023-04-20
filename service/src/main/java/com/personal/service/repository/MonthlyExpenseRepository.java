package com.personal.service.repository;

import com.personal.service.domain.MonthlyExpense;
import com.personal.service.service.dto.MonthlyExpenseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthlyExpenseRepository extends JpaRepository<MonthlyExpense, Long> {
	@Modifying
	@Query("update MonthlyExpense me set me.active = false where me.id = :id")
	void deactivateExpense(@Param("id") Long id);


	@Query("select new com.personal.service.service.dto.MonthlyExpenseDTO(e) from MonthlyExpense e where e.user.id = :userId and e.active = true")
	Page<MonthlyExpenseDTO> getAllByUser(@Param("userId") Long userId, Pageable pageable);

}
