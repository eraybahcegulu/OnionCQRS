﻿using MediatR;
using Project.Application.Interfaces.RedisCache;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Features.Brands.Queries.GetAllBrands
{
    public class GetAllBrandsQueryRequest : IRequest<IList<GetAllBrandsQueryResponse>>, ICacheableQuery
    {
        public string CacheKey => "GetAllBrands";

        public double CacheTime => 0.1;
    }
}
