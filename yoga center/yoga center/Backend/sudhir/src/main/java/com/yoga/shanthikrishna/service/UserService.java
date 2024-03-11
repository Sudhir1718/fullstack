package com.yoga.shanthikrishna.service;
import com.yoga.shanthikrishna.dto.UserDto;

import java.util.List;
public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto userDto);

    void deleteUser(Long userId);

    UserDto addUser(UserDto userDto);

}
