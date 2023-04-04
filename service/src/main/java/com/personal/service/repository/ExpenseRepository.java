package com.personal.service.repository;

import com.personal.service.domain.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

	@Modifying
	@Query("update Expense e set e.active = false where e.id = :id")
	void deactivateExpense(@Param("id") Long id);

}
