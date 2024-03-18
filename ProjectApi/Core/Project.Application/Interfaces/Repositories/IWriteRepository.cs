using Project.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Application.Interfaces.Repositories
{
    public interface IWriteRepository<T> where T : class, IEntityBase, new()
    {
        Task AddAsync(T entity);
        Task AddRangeAsync(IList<T> entities);
        Task<T> UpdateAsync(T entity);
        Task SoftDeleteAsync(T entity);
        Task SoftDeleteRangeAsync(IList<T> entities);
        Task HardDeleteAsync(T entity);
        Task HardDeleteRangeAsync(IList<T> entity);
    }
}
