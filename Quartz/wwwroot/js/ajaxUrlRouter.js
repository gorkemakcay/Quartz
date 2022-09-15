// #region Lookup Item
const lookupItemController = {

    ComponentType: {
        Add: "LookUpItems/AddComponentTypeJSON",
        Update: "LookUpItems/UpdateComponentTypeJSON",
        Delete: "LookUpItems/DeleteComponentType",
        List: "LookUpItems/GetAllComponentTypesJSON",
        Detail: "LookUpItems/GetComponentTypeDetailJSON",
        PartialView: "LookUpItems/GetComponentTypePartialView"
    },

    FittingType: {
        Add: "LookUpItems/AddFittingTypeJSON",
        Update: "LookUpItems/UpdateFittingTypeJSON",
        Delete: "LookUpItems/DeleteFittingType",
        List: "LookUpItems/GetAllFittingTypesJSON",
        Detail: "LookUpItems/GetFittingTypeDetailJSON",
        PartialView: "LookUpItems/GetFittingTypePartialView"
    },

    Method: {
        Add: "LookUpItems/AddMethodJSON",
        Update: "LookUpItems/UpdateMethodJSON",
        Delete: "LookUpItems/DeleteMethod",
        List: "LookUpItems/GetAllMethodsJSON",
        Detail: "LookUpItems/GetMethodDetailJSON",
        PartialView: "LookUpItems/GetMethodPartialView"
    },

    Operator: {
        Add: "LookUpItems/AddOperatorJSON",
        Update: "LookUpItems/UpdateOperatorJSON",
        Delete: "LookUpItems/DeleteOperator",
        List: "LookUpItems/GetAllOperatorsJSON",
        Detail: "LookUpItems/GetOperatorDetailJSON",
        PartialView: "LookUpItems/GetOperatorPartialView"
    },

    PlantArea: {
        Add: "LookUpItems/AddPlantAreaJSON",
        Update: "LookUpItems/UpdatePlantAreaJSON",
        Delete: "LookUpItems/DeletePlantArea",
        List: "LookUpItems/GetAllPlantAreasJSON",
        Detail: "LookUpItems/GetPlantAreaDetailJSON",
        PartialView: "LookUpItems/GetPlantAreaPartialView"
    },

    PlantSystem: {
        Add: "LookUpItems/AddPlantSystemJSON",
        Update: "LookUpItems/UpdatePlanSystemJSON",
        Delete: "LookUpItems/DeletePlantSystem",
        List: "LookUpItems/GetAllPlantSystemsJSON",
        Detail: "LookUpItems/GetPlantSystemDetailJSON",
        PartialView: "LookUpItems/GetPlantSystemPartialView"
    },

    Procedure: {
        Add: "LookUpItems/AddProcedureJSON",
        Update: "LookUpItems/UpdateProcedureJSON",
        Delete: "LookUpItems/DeleteProcedure",
        List: "LookUpItems/GetAllProceduresJSON",
        Detail: "LookUpItems/GetProcedureDetailJSON",
        PartialView: "LookUpItems/GetProcedurePartialView"
    },

    Specification: {
        Add: "LookUpItems/AddSpecificationJSON",
        Update: "LookUpItems/UpdateSpecificationJSON",
        Delete: "LookUpItems/DeleteSpecification",
        List: "LookUpItems/GetAllSpecificationsJSON",
        Detail: "LookUpItems/GetSpecificationDetailJSON",
        PartialView: "LookUpItems/GetSpecificationPartialView"
    },

    StandardStatement: {
        Add: "LookUpItems/AddStandardStatementJSON",
        Update: "LookUpItems/UpdateStandardStatementJSON",
        Delete: "LookUpItems/DeleteStandardStatement",
        List: "LookUpItems/GetAllStandardStatementsJSON",
        Detail: "LookUpItems/GetStandardStatementDetailJSON",
        PartialView: "LookUpItems/GetStandardStatementPartialView"
    },

    Status: {
        Add: "LookUpItems/AddStatusJSON",
        Update: "LookUpItems/UpdateStatusJSON",
        Delete: "LookUpItems/DeleteStatus",
        List: "LookUpItems/GetAllStatusesJSON",
        Detail: "LookUpItems/GetStatusDetailJSON",
        PartialView: "LookUpItems/GetStatusPartialView"
    },

    Technique: {
        Add: "LookUpItems/AddTechniqueJSON",
        Update: "LookUpItems/UpdateTechniqueJSON",
        Delete: "LookUpItems/DeleteTechnique",
        List: "LookUpItems/GetAllTechniquesJSON",
        Detail: "LookUpItems/GetTechniqueDetailJSON",
        PartialView: "LookUpItems/GetTechniquePartialView"
    },

    WeldType: {
        Add: "LookUpItems/AddWeldTypeJSON",
        Update: "LookUpItems/UpdateWeldTypeJSON",
        Delete: "LookUpItems/DeleteWeldType",
        List: "LookUpItems/GetAllWeldTypesJSON",
        Detail: "LookUpItems/GetWeldTypeDetailJSON",
        PartialView: "LookUpItems/GetWeldTypePartialView"
    }

}
// #endregion

// #region File
const fileController = {
    Upload: "FileUpload/UploadFile",
    Update: "FileUpload/UpdateFile",
    List: "FileUpload/GetAllFiles",
    Detail: "FileUpload/GetFileDetail",
    GetAllDrawings: "FileUpload/GetAllDrawings",
    Download: "FileUpload/DownloadFile",
    Delete: "FileUpload/DeleteFile"
}
// #endregion

// #region Item
const itemController = {

    Item: {
        Add: "QuartzItem/AddItemJSON",
        Update: "QuartzItem/UpdateItemJSON",
        List: "QuartzItem/GetAllItemsJSON",
        Detail: "QuartzItem/GetItemDetailJSON",
        Delete: "QuartzItem/DeleteItem",
        PartialView: "QuartzItem/GetQuartzItemsHomePagePartialView",
        AttachmentPartialView: "QuartzItem/GetAttachmentPartialView"
    },

    Information: {
        Add: "QuartzItem/AddInformationJSON",
        Update: "QuartzItem/UpdateInformationJSON",
        Detail: "QuartzItem/GetInformationDetailJSON",
        PartialView: "QuartzItem/GetInformationPartialView"
    },

    Inspection: {
        Add: "QuartzItem/AddInspectionJSON",
        Update: "QuartzItem/UpdateInspectionJSON",
        List: "QuartzItem/GetAllInspections",
        Detail: "QuartzItem/GetInspectionDetailJSON",
        Delete: "QuartzItem/DeleteInspection",
        PartialView: "QuartzItem/GetInspectionPartialView",
        DataPartialView: "QuartzItem/GetInspectionsDataPartialView",
        AttachmentPartialView: "QuartzItem/GetInspectionsAttachmentPartialView"
    },

    ValveMaintenance: {
        Add: "QuartzItem/AddValveMaintenanceJSON",
        Update: "QuartzItem/UpdateValveMaintenanceJSON",
        List: "QuartzItem/GetAllValveMaintenancesJSON",
        Detail: "QuartzItem/GetValveMaintenanceDetailJSON",
        Delete: "QuartzItem/DeleteValveMaintenance",
        PartialView: "QuartzItem/GetValveMaintenancePartialView",
        DataPartialView: "QuartzItem/GetValveMaintenanceDataPartialView",
        AttachmentPartialView: "QuartzItem/GetValveMaintenancesAttachmentPartialView"
    },

    ThicknessMeasurement: {
        Add: "QuartzItem/AddThicknessMeasurementJSON",
        Update: "QuartzItem/UpdateThicknessMeasurementJSON",
        List: "QuartzItem/GetAllThicknessMeasurementsJSON",
        Detail: "QuartzItem/GetThicknessMeasurementDetailJSON",
        Delete: "QuartzItem/DeleteThicknessMeasurement",
        PartialView: "QuartzItem/GetThicknessMeasurementPartialView",
        DataPartialView: "QuartzItem/GetThicknessMeasurementsDataPartialView",
        AttachmentPartialView: "QuartzItem/GetThicknessMeasurementsAttachmentPartialView"
    }

}
// #endregion

// #region Link
const linkController = {

    Link: {
        Add: "QuartzLink/AddLinkJSON",
        Update: "QuartzLink/UpdateLinkJSON",
        UpdateTagNo: "QuartzLink/UpdateLinksTagNo",
        List: "QuartzLink/GetAllLinksJSON",
        Detail: "QuartzLink/GetLinkDetailJSON",
        Delete: "QuartzLink/DeleteLink"
    },

    DrawingFeatures: {
        Add: "QuartzLink/AddDrawingFeaturesJSON",
        Update: "QuartzLink/UpdateDrawingFeaturesJSON",
        Detail: "QuartzLink/GetDrawingFeaturesDetailJSON",
        GetVectorSource: "QuartzLink/GetVectorSource"
    },

    DrawingSettings: {
        Add: "QuartzLink/AddDrawingSettingsJSON",
        Update: "QuartzLink/UpdateDrawingSettingsJSON",
        Detail: "QuartzLink/GetDrawingSettingsDetailJSON",
        DataPartialView: "QuartzLink/GetDrawingSettingsDataPartialView",
        AttachmentPartialView: "QuartzLink/GetDrawingSettingsAttachmentPartialView"
    },

    QuartzPartialView: "QuartzLink/GetQuartz"

}
// #endregion