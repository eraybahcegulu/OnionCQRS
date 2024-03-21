using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Domain.Common
{
    public interface IEntityBase
    {
        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
