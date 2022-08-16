using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.IItem;
using Quartz.Entities.Concrete.Project.Item;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfItemRepository
{
    public class EfQuartzItemsThicknessMeasurementRepository : EfGenericRepository<QuartzItemsThicknessMeasurement>, IQuartzItemsThicknessMeasurementDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzItemsThicknessMeasurementRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
