package net.articfish.user_management_system.user;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.articfish.user_management_system.dto.UserDto;
import net.articfish.user_management_system.exception.ResourceNotFoundException;
import net.articfish.user_management_system.usermapper.UserMapper;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> 
                new ResourceNotFoundException("User not found with given id : " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDto(user))
        .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> 
                new ResourceNotFoundException("User not found with given id: " + userId)
        );

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());

        User updatedUserObj = userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> 
                new ResourceNotFoundException("User not found with given id: " + userId)
        );

        userRepository.deleteById(userId);


    }
    
}
