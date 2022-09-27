using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.ISearch;
using Quartz.Entities.Concrete.Search;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfSearchRepository
{
    public class EfSearchDrawingRepository : EfGenericRepository<SearchDrawing>, ISearchDrawingDal
    {
        private readonly QuartzContext _ctx;
        public EfSearchDrawingRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
