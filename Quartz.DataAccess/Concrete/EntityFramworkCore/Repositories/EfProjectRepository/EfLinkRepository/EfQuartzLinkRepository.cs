using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IProject.ILink;
using Quartz.Entities.Concrete.Project.Link;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfLinkRepository
{
    public class EfQuartzLinkRepository : EfGenericRepository<QuartzLink>, IQuartzLinkDal
    {
        private readonly QuartzContext _ctx;
        public EfQuartzLinkRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
