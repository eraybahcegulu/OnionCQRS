using MediatR;
using Project.Application.Interfaces.AutoMapper;
using Project.Application.Interfaces.UnitOfWorks;
using Project.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Features.Products.Command.DeleteProduct
{
    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommandRequest>
    {
        private readonly IUnitOfWork unitOfWork;
        public DeleteProductCommandHandler(IMapper mapper, IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public async Task Handle(DeleteProductCommandRequest request, CancellationToken cancellationToken)
        {
            var product = await unitOfWork.GetReadRepository<Product>().GetAsync(x => x.Id == request.Id && !x.IsDeleted);
            product.IsDeleted = true;

            await unitOfWork.GetWriteRepository<Product>().UpdateAsync(product);
            await unitOfWork.SaveAsync();

        }
    }
}
