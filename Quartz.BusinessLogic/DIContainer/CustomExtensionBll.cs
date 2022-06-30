using Microsoft.Extensions.DependencyInjection;
using Quartz.BusinessLogic.Concrete;
using Quartz.BusinessLogic.Concrete.FileUploadManager;
using Quartz.BusinessLogic.Concrete.LookUpItemsManager;
using Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager;
using Quartz.BusinessLogic.Concrete.ProjectManager.LinkManager;
using Quartz.BusinessLogic.Concrete.Users;
using Quartz.BusinessLogic.Interface;
using Quartz.BusinessLogic.Interface.IFileUploadService;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.BusinessLogic.Interface.Users;

namespace Quartz.BusinessLogic.DIContainer
{
    public static class CustomExtensionBll
    {
        public static void AddContainerWithDependenciesBll(this IServiceCollection services)
        {
            services.AddScoped<IAppUserService, AppUserManager>()
                    .AddScoped<IAppRoleService, AppRoleManager>()
                    .AddScoped<IFileUploadService, FileUploadManager>()
                    .AddScoped<IQuartzItemService, QuartzItemManager>()
                    .AddScoped<IQuartzItemsInformationService, QuartzItemsInformationManager>()
                    .AddScoped<IQuartzItemsInspectionService, QuartzItemsInspectionManager>()
                    .AddScoped<IQuartzLinkService, QuartzLinkManager>()
                    .AddScoped<IQuartzLinksDrawingFeaturesService, QuartzLinksDrawingFeaturesManager>()
                    .AddScoped<IQuartzLinksDrawingSettingsService, QuartzLinksDrawingSettingsManager>()
                    .AddScoped<ILookUpItemsComponentTypeService, LookUpItemsComponentTypeManager>()
                    .AddScoped<ILookUpItemsFittingTypeService, LookUpItemsFittingTypeManager>()
                    .AddScoped<ILookUpItemsMethodService, LookUpItemsMethodManager>()
                    .AddScoped<ILookUpItemsOperatorService, LookUpItemsOperatorManager>()
                    .AddScoped<ILookUpItemsPlantAreaService, LookUpItemsPlantAreaManager>()
                    .AddScoped<ILookUpItemsPlantSystemService, LookUpItemsPlantSystemManager>()
                    .AddScoped<ILookUpItemsProcedureService, LookUpItemsProcedureManager>()
                    .AddScoped<ILookUpItemsSpecificationService, LookUpItemsSpecificationManager>()
                    .AddScoped<ILookUpItemsStandardStatementService, LookUpItemsStandardStatementManager>()
                    .AddScoped<ILookUpItemsStatusService, LookUpItemsStatusManager>()
                    .AddScoped<ILookUpItemsTechniqueService, LookUpItemsTechniqueManager>()
                    .AddScoped<ILookUpItemsWeldTypeService, LookUpItemsWeldTypeManager>();
                    

            services.AddScoped(typeof(IGenericService<>), typeof(GenericManager<>));
        }
    }
}
