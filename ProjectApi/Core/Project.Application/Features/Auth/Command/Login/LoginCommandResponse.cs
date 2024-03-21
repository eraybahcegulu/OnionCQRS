using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Features.Auth.Command.Login
{
    public class LoginCommandResponse
    {
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
    }
}
