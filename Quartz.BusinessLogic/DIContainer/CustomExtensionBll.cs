using Microsoft.Extensions.DependencyInjection;
using Quartz.BusinessLogic.Concrete;
using Quartz.BusinessLogic.Concrete.Documents;
using Quartz.BusinessLogic.Concrete.Projects;
using Quartz.BusinessLogic.Concrete.Projects.Items;
using Quartz.BusinessLogic.Concrete.Users;
using Quartz.BusinessLogic.Interface;
using Quartz.BusinessLogic.Interface.Documents;
using Quartz.BusinessLogic.Interface.Projects;
using Quartz.BusinessLogic.Interface.Projects.Items;
using Quartz.BusinessLogic.Interface.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.DIContainer
{
    public static class CustomExtensionBll
    {
        public static void AddContainerWithDependenciesBll(this IServiceCollection services)
        {
            services.AddScoped<IAppUserService, AppUserManager>()
                    .AddScoped<IAppRoleService, AppRoleManager>()

                    .AddScoped<IDocumentService, DocumentManager>()

                    .AddScoped<IQuartzService, QuartzManager>()
                    .AddScoped<ILinkService, LinkManager>()
                    .AddScoped<IItemService, ItemManager>()
                    .AddScoped<IInformationService, InformationManager>()
                    .AddScoped<IInspectionService, InspectionManager>()

                    .AddScoped<IFileService, FileManager>();

            services.AddScoped(typeof(IGenericService<>), typeof(GenericManager<>));
        }
    }
}
