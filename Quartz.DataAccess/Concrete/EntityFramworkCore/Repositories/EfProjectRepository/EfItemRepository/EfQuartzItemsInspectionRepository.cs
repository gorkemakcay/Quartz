using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.IItem;
using Quartz.Entities.Concrete.Projects.Item;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfItemRepository
{
    public class EfQuartzItemsInspectionRepository : EfGenericRepository<QuartzItemsInspection>, IQuartzItemsInspectionDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzItemsInspectionRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
