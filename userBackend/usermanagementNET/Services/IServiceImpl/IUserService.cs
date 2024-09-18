using usermanagementNET.Models;

namespace usermanagementNET.Services.IServiceImpl
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User?> GetUserByIdAsync(int id);
        Task<User> UpdateUserAsync(User user);
    }
}
