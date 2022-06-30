using Microsoft.Extensions.DependencyInjection;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfFileUploadResository;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfLookupRepository;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfItemRepository;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfProjectRepository.EfLinkRepository;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfUsersRepository;
using Quartz.DataAccess.Interface;
using Quartz.DataAccess.Interface.IFileUpload;
using Quartz.DataAccess.Interface.ILookUpItems;
using Quartz.DataAccess.Interface.IProject.IItem;
using Quartz.DataAccess.Interface.IProject.ILink;
using Quartz.DataAccess.Interface.Users;
using Quartz.DataAccess.UnitOfWorks.Concrete;
using Quartz.DataAccess.UnitOfWorks.Interface;

namespace Quartz.DataAccess.DIContainer
{
    public static class CustomExtensionsDal
    {
        public static void AddContainerWithDependenciesDal(this IServiceCollection services)
        {
            services.AddScoped<IFileUploadDal, EfFileUploadRepository>()
                    .AddScoped<IQuartzItemDal, EfQuartzItemRepository>()
                    .AddScoped<IQuartzItemsInformationDal, EfQuartzItemsInformationRepository>()
                    .AddScoped<IQuartzItemsInspectionDal, EfQuartzItemsInspectionRepository>()
                    .AddScoped<IQuartzLinkDal, EfQuartzLinkRepository>()
                    .AddScoped<IQuartzLinksDrawingFeaturesDal, EfQuartzLinksDrawingFeaturesRepository>()
                    .AddScoped<IQuartzLinksDrawingSettingsDal, EfQuartzLinksDrawingSettingsRepository>()
                    .AddScoped<IAppUserDal, EfAppUserRepository>()
                    .AddScoped<IAppRoleDal, EfAppRoleRepository>()
                    .AddScoped<ILookupItemsComponentTypeDal, EfLookupItemsComponentTypeRepository>()
                    .AddScoped<ILookupItemsFittingTypeDal, EfLookupItemsFittingTypeRepository>()
                    .AddScoped<ILookupItemsMethodDal, EfLookupItemsMethodRepository>()
                    .AddScoped<ILookupItemsOperatorDal, EfLookupItemsOperatorRepository>()
                    .AddScoped<ILookupItemsPlantAreaDal, EfLookupItemsPlantAreaRepository>()
                    .AddScoped<ILookupItemsPlantSystemDal, EfLookupItemsPlantSystemRepository>()
                    .AddScoped<ILookupItemsProcedureDal, EfLookupItemsProcedureRepository>()
                    .AddScoped<ILookupItemsSpecificationDal, EfLookupItemsSpecificationRepository>()
                    .AddScoped<ILookupItemsStandardStatementDal, EfLookupItemsStandardStatementRepository>()
                    .AddScoped<ILookupItemsStatusDal, EfLookupItemsStatusRepository>()
                    .AddScoped<ILookupItemsTechniqueDal, EfLookupItemsTechniqueRepository>()
                    .AddScoped<ILookupItemsWeldTypeDal, EfLookupItemsWeldTypeRepository>();
                    

            services.AddScoped(typeof(IGenericDal<>), typeof(EfGenericRepository<>))
                    .AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}
