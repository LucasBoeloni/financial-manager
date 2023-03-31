package com.personal.service.service.mapper;

import com.personal.service.domain.User;
import com.personal.service.service.dto.UserDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface UserMapper extends EntityMapper<UserDTO, User> {
}
