using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Users;
using Quartz.Entities.Concrete.Users;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfUsersRepository
{
    public class EfAppUserRepository : EfGenericRepository<AppUser>, IAppUserDal
    {
        private readonly QuartzContext _ctx;
        public EfAppUserRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }
    }
}
