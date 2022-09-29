using AutoMapper;
using Quartz.Common.ViewModels.FileUpload.FileUploadViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsComponentTypeViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsFittingTypeViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsMethodViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsOperatorViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantAreaViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsPlantSystemViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsProcedureViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsSpecificationViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStandardStatementViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsStatusViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsTechniqueViewModels;
using Quartz.Common.ViewModels.LookUpItems.LookUpItemsWeldTypeViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInformationViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsThicknessMeasurement;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsValveMaintenance;
using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingFeaturesViewModels;
using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingSettingsViewModels;
using Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels;
using Quartz.Common.ViewModels.Search.SearchDrawing;
using Quartz.Common.ViewModels.Search.SearchTag;
using Quartz.Common.ViewModels.Users.AppRoleViewModels;
using Quartz.Common.ViewModels.Users.AppUserViewModels;
using Quartz.Entities.Concrete.FileUploads;
using Quartz.Entities.Concrete.LookUpItems;
using Quartz.Entities.Concrete.Project.Item;
using Quartz.Entities.Concrete.Project.Link;
using Quartz.Entities.Concrete.Projects.Item;
using Quartz.Entities.Concrete.Search;
using Quartz.Entities.Concrete.Users;

namespace Quartz.Common.Mapping.AutoMapperProfile
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            #region Users

            #region AppUser
            CreateMap<AppUser, AppUserAddViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserListViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserUpdateViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserLogInViewModel>().ReverseMap();
            #endregion

            #region AppRole
            CreateMap<AppRole, AppRoleAddViewModel>().ReverseMap();
            CreateMap<AppRole, AppRoleUpdateViewModel>().ReverseMap();
            CreateMap<AppRole, AppRoleListViewModel>().ReverseMap();
            #endregion

            #endregion

            #region Project

            #region Link

            #region QuartzLink
            CreateMap<QuartzLink, QuartzLinkAddViewModel>().ReverseMap();
            CreateMap<QuartzLink, QuartzLinkListViewModel>().ReverseMap();
            CreateMap<QuartzLink, QuartzLinkUpdateViewModel>().ReverseMap();
            CreateMap<QuartzLink, QuartzLinkDeleteViewModel>().ReverseMap();
            #endregion

            #region QuartzLinksDrawingFeatures
            CreateMap<QuartzLinksDrawingFeatures, QuartzLinksDrawingFeaturesAddViewModel>().ReverseMap();
            CreateMap<QuartzLinksDrawingFeatures, QuartzLinksDrawingFeaturesUpdateViewModel>().ReverseMap();
            #endregion

            #region QuartzLinksDrawingSettings
            CreateMap<QuartzLinksDrawingSettings, QuartzLinksDrawingSettingsAddViewModel>().ReverseMap();
            CreateMap<QuartzLinksDrawingSettings, QuartzLinksDrawingSettingsUpdateViewModel>().ReverseMap();
            #endregion

            #endregion

            #region Item

            #region QuartzItem
            CreateMap<QuartzItem, QuartzItemAddViewModel>().ReverseMap();
            CreateMap<QuartzItem, QuartzItemListViewModel>().ReverseMap();
            CreateMap<QuartzItem, QuartzItemUpdateViewModel>().ReverseMap();
            CreateMap<QuartzItem, QuartzItemDeleteViewModel>().ReverseMap();
            #endregion

            #region QuartzItemsInformation
            CreateMap<QuartzItemsInformation, QuartzItemsInformationAddViewModel>().ReverseMap();
            CreateMap<QuartzItemsInformation, QuartzItemsInformationUpdateViewModel>().ReverseMap();
            #endregion

            #region QuartzItemsInspection
            CreateMap<QuartzItemsInspection, QuartzItemsInspectionAddViewModel>().ReverseMap();
            CreateMap<QuartzItemsInspection, QuartzItemsInspectionUpdateViewModel>().ReverseMap();
            CreateMap<QuartzItemsInspection, QuartzItemsInspectionDeleteViewModel>().ReverseMap();
            CreateMap<QuartzItemsInspection, QuartzItemsInspectionFilterViewModel>().ReverseMap();
            #endregion

            #region QuartzItemsThicknessMeasurement
            CreateMap<QuartzItemsThicknessMeasurement, QuartzItemsThicknessMeasurementAddViewModel>().ReverseMap();
            CreateMap<QuartzItemsThicknessMeasurement, QuartzItemsThicknessMeasurementListViewModel>().ReverseMap();
            CreateMap<QuartzItemsThicknessMeasurement, QuartzItemsThicknessMeasurementUpdateViewModel>().ReverseMap();
            CreateMap<QuartzItemsThicknessMeasurement, QuartzItemsThicknessMeasurementDeleteViewModel>().ReverseMap();
            CreateMap<QuartzItemsThicknessMeasurement, QuartzItemsThicknessMeasurementFilterViewModel>().ReverseMap();
            #endregion

            #region QuartzItemsValveMaintenance
            CreateMap<QuartzItemsValveMaintenance, QuartzItemsValveMaintenanceAddViewModel>().ReverseMap();
            CreateMap<QuartzItemsValveMaintenance, QuartzItemsValveMaintenanceListViewModel>().ReverseMap();
            CreateMap<QuartzItemsValveMaintenance, QuartzItemsValveMaintenanceUpdateViewModel>().ReverseMap();
            CreateMap<QuartzItemsValveMaintenance, QuartzItemsValveMaintenanceDeleteViewModel>().ReverseMap();
            CreateMap<QuartzItemsValveMaintenance, QuartzItemsValveMaintenanceFilterViewModel>().ReverseMap();

            #endregion

            #endregion

            #region LookUpItems

            #region LookUpItemsComponentType
            CreateMap<LookUpItemsComponentType, LookUpItemsComponentTypeAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsComponentType, LookUpItemsComponentTypeListViewModel>().ReverseMap();
            CreateMap<LookUpItemsComponentType, LookUpItemsComponentTypeUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsComponentType, LookUpItemsComponentTypeDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsFittingType
            CreateMap<LookUpItemsFittingType, LookUpItemsFittingTypeAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsFittingType, LookUpItemsFittingTypeListViewModel>().ReverseMap();
            CreateMap<LookUpItemsFittingType, LookUpItemsFittingTypeUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsFittingType, LookUpItemsFittingTypeDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsMethod
            CreateMap<LookUpItemsMethod, LookUpItemsMethodAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsMethod, LookUpItemsMethodListViewModel>().ReverseMap();
            CreateMap<LookUpItemsMethod, LookUpItemsMethodUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsMethod, LookUpItemsMethodDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsOperator
            CreateMap<LookUpItemsOperator, LookUpItemsOperatorAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsOperator, LookUpItemsOperatorListViewModel>().ReverseMap();
            CreateMap<LookUpItemsOperator, LookUpItemsOperatorUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsOperator, LookUpItemsOperatorDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsPlantArea
            CreateMap<LookUpItemsPlantArea, LookUpItemsPlantAreaAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsPlantArea, LookUpItemsPlantAreaListViewModel>().ReverseMap();
            CreateMap<LookUpItemsPlantArea, LookUpItemsPlantAreaUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsPlantArea, LookUpItemsPlantAreaDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsPlantSystem
            CreateMap<LookUpItemsPlantSystem, LookUpItemsPlantSystemAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsPlantSystem, LookUpItemsPlantSystemListViewModel>().ReverseMap();
            CreateMap<LookUpItemsPlantSystem, LookUpItemsPlantSystemUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsPlantSystem, LookUpItemsPlantSystemDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsProcedure
            CreateMap<LookUpItemsProcedure, LookUpItemsProcedureAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsProcedure, LookUpItemsProcedureListViewModel>().ReverseMap();
            CreateMap<LookUpItemsProcedure, LookUpItemsProcedureUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsProcedure, LookUpItemsProcedureDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsSpecification
            CreateMap<LookUpItemsSpecification, LookUpItemsSpecificationAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsSpecification, LookUpItemsSpecificationListViewModel>().ReverseMap();
            CreateMap<LookUpItemsSpecification, LookUpItemsSpecificationUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsSpecification, LookUpItemsSpecificationDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsStandardStatement
            CreateMap<LookUpItemsStandardStatement, LookUpItemsStandardStatementAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsStandardStatement, LookUpItemsStandardStatementListViewModel>().ReverseMap();
            CreateMap<LookUpItemsStandardStatement, LookUpItemsStandardStatementUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsStandardStatement, LookUpItemsStandardStatementDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsStatus
            CreateMap<LookUpItemsStatus, LookUpItemsStatusAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsStatus, LookUpItemsStatusListViewModel>().ReverseMap();
            CreateMap<LookUpItemsStatus, LookUpItemsStatusUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsStatus, LookUpItemsStatusDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsTechnique
            CreateMap<LookUpItemsTechnique, LookUpItemsTechniqueAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsTechnique, LookUpItemsTechniqueListViewModel>().ReverseMap();
            CreateMap<LookUpItemsTechnique, LookUpItemsTechniqueUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsTechnique, LookUpItemsTechniqueDeleteViewModel>().ReverseMap();
            #endregion

            #region LookUpItemsWeldType
            CreateMap<LookUpItemsWeldType, LookUpItemsWeldTypeAddViewModel>().ReverseMap();
            CreateMap<LookUpItemsWeldType, LookUpItemsWeldTypeListViewModel>().ReverseMap();
            CreateMap<LookUpItemsWeldType, LookUpItemsWeldTypeUpdateViewModel>().ReverseMap();
            CreateMap<LookUpItemsWeldType, LookUpItemsWeldTypeDeleteViewModel>().ReverseMap();
            #endregion

            #endregion

            #endregion

            #region FileUpload
            CreateMap<FileUpload, FileUploadAddViewModel>().ReverseMap();
            CreateMap<FileUpload, FileUploadListViewModel>().ReverseMap();
            CreateMap<FileUpload, FileUploadDeleteViewModel>().ReverseMap();
            CreateMap<FileUpload, FileUploadUpdateViewModel>().ReverseMap();
            #endregion

            #region Search

            #region Search Tag
            CreateMap<SearchTag, SearchTagListViewModel>().ReverseMap();
            #endregion

            #region Search Drawing
            CreateMap<SearchDrawing, SearchDrawingListViewModel>().ReverseMap();
            #endregion

            #endregion

        }
    }
}
