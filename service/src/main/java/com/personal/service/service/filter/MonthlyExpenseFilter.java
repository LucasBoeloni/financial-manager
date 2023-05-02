package com.personal.service.service.filter;

import com.personal.service.domain.MonthlyExpense;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyExpenseFilter implements Serializable {

	private String name;

	private BigDecimal value;

	private LocalDate endDate;

	private LocalDate startDate;

	private Integer day;

	public Specification<MonthlyExpense> filter(){
		List<GenericSpecification<MonthlyExpense>> specifications = new ArrayList<>();
		List<Field> fields = Arrays.stream(MonthlyExpenseFilter.class.getDeclaredFields()).collect(Collectors.toList());
		fields.forEach(field -> {
			try {
				Object object = field.get(this);
				if(Objects.nonNull(object)){
					specifications.add(new GenericSpecification<>(new SearchCriteria(field.getName(),":",object)));
				}
			} catch (IllegalAccessException e) {
				throw new RuntimeException(e);
			}
		});
		if(!specifications.isEmpty()){
			Specification<MonthlyExpense> specification = Specification.where(specifications.get(0));
			for(int aux = 1; aux <= specifications.size() -1; aux ++){
				specification = specification.and(specifications.get(aux));
			}
			return specification;
		}
		return null;
	}
}
