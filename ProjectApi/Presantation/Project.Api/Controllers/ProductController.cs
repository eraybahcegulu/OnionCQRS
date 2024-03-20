using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project.Application.Features.Brands.Command.CreateBrand;
using Project.Application.Features.Brands.Queries.GetAllBrands;
using Project.Application.Features.Products.Command.CreateProduct;
using Project.Application.Features.Products.Command.DeleteProduct;
using Project.Application.Features.Products.Command.UpdateProduct;
using Project.Application.Features.Products.Queries.GetAllProducts;

namespace Project.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IMediator mediator;

        public ProductController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllProducts()
        {
            await Task.Delay(1000);
            var response = await mediator.Send(new GetAllProductsQueryRequest());
            return Ok(response);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateProduct(CreateProductCommandRequest request)
        {
            await Task.Delay(1000);
            await mediator.Send(request);
            return Ok();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> UpdateProduct(UpdateProductCommandRequest request)
        {
            await Task.Delay(1000);
            await mediator.Send(request);
            return Ok();
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> DeleteProduct(DeleteProductCommandRequest request)
        {
            await Task.Delay(1000);
            await mediator.Send(request);
            return Ok();
        }
    }
}
