﻿using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.Users;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Users
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
