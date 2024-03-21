using Project.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Features.Products.Queries.GetAllProducts
{
    public class GetAllProductsQueryResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public decimal Discount { get; set; }
        public BrandDto Brand { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
