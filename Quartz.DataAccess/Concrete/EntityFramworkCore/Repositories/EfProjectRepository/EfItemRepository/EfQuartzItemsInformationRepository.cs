using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.IItem;
using Quartz.Entities.Concrete.Projects.Item;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfItemRepository
{
    public class EfQuartzItemsInformationRepository : EfGenericRepository<QuartzItemsInformation>, IQuartzItemsInformationDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzItemsInformationRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
