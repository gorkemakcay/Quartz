using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Projects;
using Quartz.Entities.Concrete.Projects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Projects
{
    public class EfLinkRepository : EfGenericRepository<Link>, ILinkDal
    {
        private readonly QuartzContext _ctx;
        public EfLinkRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
