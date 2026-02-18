package net.articfish.user_management_system.usermapper;

import net.articfish.user_management_system.dto.UserDto;
import net.articfish.user_management_system.user.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
            user.getId(),
            user.getName(),
            user.getEmail()
        );
    }
    public static User mapToUser(UserDto userDto){
        return new User(
            userDto.getId(),
            userDto.getName(),
            userDto.getEmail()
        );
    }
}
