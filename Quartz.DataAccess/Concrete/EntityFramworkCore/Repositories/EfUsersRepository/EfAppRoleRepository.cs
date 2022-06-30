using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Users;
using Quartz.Entities.Concrete.Users;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfUsersRepository
{
    public class EfAppRoleRepository : EfGenericRepository<AppRole>, IAppRoleDal
    {
        private readonly QuartzContext _ctx;
        public EfAppRoleRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
