using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.ILookUpItems;
using Quartz.Entities.Concrete.LookUpItems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfLookupRepository
{
    public class EfLookupItemsOperatorRepository : EfGenericRepository<LookUpItemsOperator>, ILookupItemsOperatorDal
    {
        private readonly QuartzContext _ctx;
        public EfLookupItemsOperatorRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
