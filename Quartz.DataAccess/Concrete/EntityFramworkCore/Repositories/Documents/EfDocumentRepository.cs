using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Documents;
using Quartz.Entities.Concrete.Documents;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Documents
{
    public class EfDocumentRepository : EfGenericRepository<Document>, IDocumentDal
    {
        private readonly QuartzContext _ctx;
        public EfDocumentRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
