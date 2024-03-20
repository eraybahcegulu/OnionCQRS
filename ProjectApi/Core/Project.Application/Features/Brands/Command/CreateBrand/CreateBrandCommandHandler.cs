using Bogus;
using MediatR;
using Microsoft.AspNetCore.Http;
using Project.Application.Bases;
using Project.Application.Interfaces.AutoMapper;
using Project.Application.Interfaces.UnitOfWorks;
using Project.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Features.Brands.Command.CreateBrand
{
    public class CreateBrandCommandHandler : BaseHandler, IRequestHandler<CreateBrandCommandRequest, Unit>
    {
        public CreateBrandCommandHandler(IMapper mapper, IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor) : base(mapper, unitOfWork, httpContextAccessor)
        {
        }

        public async Task<Unit> Handle(CreateBrandCommandRequest request, CancellationToken cancellationToken)
        {
            Brand brand = new(request.Name);

            await unitOfWork.GetWriteRepository<Brand>().AddAsync(brand);

            await unitOfWork.SaveAsync();

            return Unit.Value;
        }
    }
}
