using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
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
using Quartz.DataAccess.UnitOfWorks.Interface;

namespace Quartz.DataAccess.UnitOfWorks.Concrete
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly QuartzContext _ctx;

        public IAppRoleDal appRoleDal { get; private set; }

        public IAppUserDal appUserDal { get; private set; }

        public IFileUploadDal fileUploadDal { get; private set; }

        public IQuartzItemDal quartzItemDal { get; private set; }

        public IQuartzItemsInformationDal quartzItemsInformationDal { get; private set; }

        public IQuartzItemsInspectionDal quartzItemsInspectionDal { get; private set; }

        public IQuartzItemsValveMaintenanceDal quartzItemsValveMaintenanceDal { get; private set; }

        public IQuartzItemsThicknessMeasurementDal quartzItemsThicknessMeasurementDal { get; private set; }

        public IQuartzLinkDal quartzLinkDal { get; private set; }

        public IQuartzLinksDrawingFeaturesDal quartzLinksDrawingFeaturesDal { get; private set; }

        public IQuartzLinksDrawingSettingsDal quartzLinksDrawingSettingsDal { get; private set; }

        public ILookupItemsComponentTypeDal lookupItemsComponentTypeDal { get; private set; }

        public ILookupItemsFittingTypeDal lookupItemsFittingTypeDal { get; private set; }

        public ILookupItemsMethodDal lookupItemsMethodDal { get; private set; }

        public ILookupItemsOperatorDal lookupItemsOperatorDal { get; private set; }

        public ILookupItemsPlantAreaDal lookupItemsPlantAreaDal { get; private set; }

        public ILookupItemsPlantSystemDal lookupItemsPlantSystemDal { get; private set; }

        public ILookupItemsProcedureDal lookupItemsProcedureDal { get; private set; }

        public ILookupItemsSpecificationDal lookupItemsSpecificationDal { get; private set; }

        public ILookupItemsStandardStatementDal lookupItemsStandardStatementDal { get; private set; }

        public ILookupItemsStatusDal lookupItemsStatusDal { get; private set; }

        public ILookupItemsTechniqueDal lookupItemsTechniqueDal { get; private set; }

        public ILookupItemsWeldTypeDal lookupItemsWeldTypeDal { get; private set; }

        public UnitOfWork(QuartzContext ctx)
        {
            _ctx = ctx;

            appRoleDal = new EfAppRoleRepository(_ctx);
            appUserDal = new EfAppUserRepository(_ctx);
            fileUploadDal = new EfFileUploadRepository(_ctx);
            quartzItemDal = new EfQuartzItemRepository(_ctx);
            quartzItemsInformationDal = new EfQuartzItemsInformationRepository(_ctx);
            quartzItemsInspectionDal = new EfQuartzItemsInspectionRepository(_ctx);
            quartzItemsValveMaintenanceDal = new EfQuartzItemsValveMaintenanceRepository(_ctx);
            quartzItemsThicknessMeasurementDal = new EfQuartzItemsThicknessMeasurementRepository(_ctx);
            quartzLinkDal = new EfQuartzLinkRepository(_ctx);
            quartzLinksDrawingFeaturesDal = new EfQuartzLinksDrawingFeaturesRepository(_ctx);
            quartzLinksDrawingSettingsDal = new EfQuartzLinksDrawingSettingsRepository(_ctx);
            lookupItemsComponentTypeDal = new EfLookupItemsComponentTypeRepository(_ctx);
            lookupItemsFittingTypeDal = new EfLookupItemsFittingTypeRepository(_ctx);
            lookupItemsMethodDal = new EfLookupItemsMethodRepository(_ctx);
            lookupItemsOperatorDal = new EfLookupItemsOperatorRepository(_ctx);
            lookupItemsPlantAreaDal = new EfLookupItemsPlantAreaRepository(_ctx);
            lookupItemsPlantSystemDal = new EfLookupItemsPlantSystemRepository(_ctx);
            lookupItemsProcedureDal = new EfLookupItemsProcedureRepository(_ctx);
            lookupItemsSpecificationDal = new EfLookupItemsSpecificationRepository(_ctx);
            lookupItemsStandardStatementDal = new EfLookupItemsStandardStatementRepository(_ctx);
            lookupItemsStatusDal = new EfLookupItemsStatusRepository(_ctx);
            lookupItemsTechniqueDal = new EfLookupItemsTechniqueRepository(_ctx);
            lookupItemsWeldTypeDal = new EfLookupItemsWeldTypeRepository(_ctx);
        }

        public void Dispose()
        {
            _ctx.Dispose();
        }

        public void SaveChange()
        {
            try
            {
                _ctx.SaveChanges();
            }
            catch
            {

                throw;
            }
            finally
            {

            }
        }

        IGenericDal<Table> IUnitOfWork.GetRepository<Table>()
        {
            return new EfGenericRepository<Table>(_ctx);
        }
    }
}
