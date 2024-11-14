using SocialHub.Domain.Entities;
using SocialHub.Domain.Respositories.Interfaces;

namespace SocialHubAPI.UseCases
{
    public class RegisterUserUseCase
    {
        private readonly IUserRepository _userRepository;

        public RegisterUserUseCase(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task RegisterAsync(string username, string password)
        {
            var existingUser = await _userRepository.GetByUsernameAsync(username);
            if (existingUser != null)
                throw new Exception("Usuário já existe.");

            var hashedPassword = HashPassword(password); // Use um método seguro para hashing
            var user = new User(username, hashedPassword);

            await _userRepository.AddAsync(user);
        }

        private string HashPassword(string password)
        {
            // Simulação de hash. Use algo como BCrypt, Argon2 em produção.
            return password;
        }
    }
}
