package com.personal.service.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class SelectionDTO implements Serializable {

	private String label;

	private Long value;

	public SelectionDTO(String label, Long value) {
		this.label = label;
		this.value = value;
	}
}
