package com.personal.service.service.dto;

import com.personal.service.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
public class UserDTO implements Serializable {

	private Long id;

	private String name;

	private String surname;

	private BigDecimal income;

	private String password;

	private String email;

	private Boolean active;

	public UserDTO (User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.surname = user.getSurname();
		this.income = user.getIncome();
		this.email = user.getEmail();
	}

}
