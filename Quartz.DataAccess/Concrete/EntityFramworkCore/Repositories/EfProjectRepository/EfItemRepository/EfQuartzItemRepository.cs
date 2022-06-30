using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.IItem;
using Quartz.Entities.Concrete.Project.Item;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfItemRepository
{
    public class EfQuartzItemRepository : EfGenericRepository<QuartzItem>, IQuartzItemDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzItemRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
