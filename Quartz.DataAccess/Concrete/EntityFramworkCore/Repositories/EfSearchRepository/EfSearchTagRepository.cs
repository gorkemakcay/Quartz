using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.ISearch;
using Quartz.Entities.Concrete.Search;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfSearchRepository
{
    public class EfSearchTagRepository : EfGenericRepository<SearchTag>, ISearchTagDal
    {
        private readonly QuartzContext _ctx;
        public EfSearchTagRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
