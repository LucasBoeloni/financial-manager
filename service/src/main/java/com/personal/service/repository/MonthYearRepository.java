package com.personal.service.repository;

import com.personal.service.domain.MonthYear;
import com.personal.service.service.dto.SelectionDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MonthYearRepository extends JpaRepository<MonthYear, Long> {

	@Query("SELECT new com.personal.service.service.dto.SelectionDTO(my.name,my.id) FROM MonthYear my WHERE my.user.id = :userId ORDER BY my.date DESC")
	List<SelectionDTO> getAllSelection(@Param("userId") Long userId);

}
