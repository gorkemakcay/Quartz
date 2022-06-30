using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.ILink;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfLinkRepository
{
    public class EfQuartzLinksDrawingFeaturesRepository : EfGenericRepository<QuartzLinksDrawingFeatures>, IQuartzLinksDrawingFeaturesDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzLinksDrawingFeaturesRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
