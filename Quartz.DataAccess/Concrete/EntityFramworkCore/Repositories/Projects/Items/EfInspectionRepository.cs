using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Projects.Items;
using Quartz.Entities.Concrete.Projects.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Projects.Items
{
    public class EfInspectionRepository : EfGenericRepository<Inspection>, IInspectionDal
    {
        private readonly QuartzContext _ctx;
        public EfInspectionRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
