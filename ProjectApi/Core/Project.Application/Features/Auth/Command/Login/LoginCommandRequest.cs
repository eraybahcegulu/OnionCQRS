using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Features.Auth.Command.Login
{
    public class LoginCommandRequest : IRequest<LoginCommandResponse>
    {
        [DefaultValue("eraybahcegulu@gmail.com")]
        public string Email { get; set; }
        [DefaultValue("eraybahcegulu")]
        public string Password { get; set; }
    }
}
