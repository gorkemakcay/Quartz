using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Projects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Projects
{
    public class EfQuartzRepository : EfGenericRepository<Entities.Concrete.Projects.Quartz>, IQuartzDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
