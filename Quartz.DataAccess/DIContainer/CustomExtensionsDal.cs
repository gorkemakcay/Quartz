using Microsoft.Extensions.DependencyInjection;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories;
using Quartz.DataAccess.Interface;
using Quartz.DataAccess.UnitOfWorks.Concrete;
using Quartz.DataAccess.UnitOfWorks.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.DIContainer
{
    public static class CustomExtensionsDal
    {
        public static void AddContainerWithDependenciesDal(this IServiceCollection services)
        {
            services.AddScoped(typeof(IGenericDal<>), typeof(EfGenericRepository<>))
                    .AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}
