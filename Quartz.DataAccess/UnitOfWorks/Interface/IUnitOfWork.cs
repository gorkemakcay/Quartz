using Quartz.DataAccess.Interface;
using Quartz.DataAccess.Interface.IFileUpload;
using Quartz.DataAccess.Interface.ILookUpItems;
using Quartz.DataAccess.Interface.IProject.IItem;
using Quartz.DataAccess.Interface.IProject.ILink;
using Quartz.DataAccess.Interface.ISearch;
using Quartz.DataAccess.Interface.Users;
using Quartz.Entities.Interface;
using System;

namespace Quartz.DataAccess.UnitOfWorks.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        IAppRoleDal appRoleDal { get; }
        IAppUserDal appUserDal { get; }
        IFileUploadDal fileUploadDal { get; }
        IQuartzItemDal quartzItemDal { get; }
        IQuartzItemsInformationDal quartzItemsInformationDal { get; }
        IQuartzItemsInspectionDal quartzItemsInspectionDal { get; }
        IQuartzItemsValveMaintenanceDal quartzItemsValveMaintenanceDal { get; }
        IQuartzItemsThicknessMeasurementDal quartzItemsThicknessMeasurementDal { get; }
        IQuartzLinkDal quartzLinkDal { get; }
        IQuartzLinksDrawingFeaturesDal quartzLinksDrawingFeaturesDal { get; }
        IQuartzLinksDrawingSettingsDal quartzLinksDrawingSettingsDal { get; }
        ILookupItemsComponentTypeDal lookupItemsComponentTypeDal { get; }
        ILookupItemsFittingTypeDal lookupItemsFittingTypeDal { get; }
        ILookupItemsMethodDal lookupItemsMethodDal { get; }
        ILookupItemsOperatorDal lookupItemsOperatorDal { get; }
        ILookupItemsPlantAreaDal lookupItemsPlantAreaDal { get; }
        ILookupItemsPlantSystemDal lookupItemsPlantSystemDal { get; }
        ILookupItemsProcedureDal lookupItemsProcedureDal { get; }
        ILookupItemsSpecificationDal lookupItemsSpecificationDal { get; }
        ILookupItemsStandardStatementDal lookupItemsStandardStatementDal { get; }
        ILookupItemsStatusDal lookupItemsStatusDal { get; }
        ILookupItemsTechniqueDal lookupItemsTechniqueDal { get; }
        ILookupItemsWeldTypeDal lookupItemsWeldTypeDal { get; }
        ISearchTagDal searchTagDal { get; }
        IGenericDal<Table> GetRepository<Table>() where Table : class, ITable, new();

        void SaveChange();
    }
}
