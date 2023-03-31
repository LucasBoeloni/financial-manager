package com.personal.service.service;

import com.personal.service.domain.User;
import com.personal.service.repository.UserRepository;
import com.personal.service.service.dto.UserDTO;
import com.personal.service.service.mapper.UserMapper;
import com.personal.service.utils.ExceptionMessageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.ws.rs.BadRequestException;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;
    private final UserMapper mapper;

    private User findById(Integer id) {
        return repository.findById(id).orElseThrow(() -> new BadRequestException(ExceptionMessageUtil.ENTITY_NOT_FOUND));
    }

    public UserDTO getById(Integer id) {
        return mapper.toDto(findById(id));
    }

    public UserDTO insert(UserDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public UserDTO login(UserDTO dto) {
        return repository.login(dto).orElseThrow(() -> new BadRequestException(ExceptionMessageUtil.ENTITY_NOT_FOUND));
    }

}
