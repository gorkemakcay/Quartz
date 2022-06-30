using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.ILink;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfLinkRepository
{
    public class EfQuartzLinksDrawingSettingsRepository : EfGenericRepository<QuartzLinksDrawingSettings>, IQuartzLinksDrawingSettingsDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzLinksDrawingSettingsRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
