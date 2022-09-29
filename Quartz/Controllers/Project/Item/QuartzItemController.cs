using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.BusinessLogic.Interface.ISearch;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInformationViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsThicknessMeasurement;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsValveMaintenance;
using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using System.Linq;

namespace Quartz.Controllers.Project.Item
{
    public class QuartzItemController : Controller
    {
        private readonly IQuartzItemService _itemService;
        private readonly IQuartzItemsInformationService _informationService;
        private readonly IQuartzItemsInspectionService _inspectionService;
        private readonly IQuartzItemsValveMaintenanceService _quartzItemsValveMaintenanceService;
        private readonly IQuartzItemsThicknessMeasurementService _quartzItemsThicknessMeasurementService;
        public QuartzItemController(IQuartzItemService itemService,
                                    IQuartzItemsInformationService informationService,
                                    IQuartzItemsInspectionService inspectionService,
                                    IQuartzItemsValveMaintenanceService quartzItemsValveMaintenanceService,
                                    IQuartzItemsThicknessMeasurementService quartzItemsThicknessMeasurementService)
        {
            _itemService = itemService;
            _informationService = informationService;
            _inspectionService = inspectionService;
            _quartzItemsValveMaintenanceService = quartzItemsValveMaintenanceService;
            _quartzItemsThicknessMeasurementService = quartzItemsThicknessMeasurementService;
        }

        #region Item
        [HttpPost]
        public IActionResult AddItemJSON(QuartzItemAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                var id = _itemService.AddItem(model);
                var responseModel = _itemService.GetItemDetail(id);
                var jSonModel = JsonConvert.SerializeObject(responseModel, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateItemJSON(QuartzItemUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _itemService.UpdateItem(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetAllItemsJSON(int linkId)
        {
            var model = _itemService.GetAllItems(linkId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetItemDetailJSON(int itemId)
        {
            var model = _itemService.GetItemDetail(itemId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteItem(QuartzItemDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _itemService.DeleteItem(model);
            }
                return Json(null);
        }

        [HttpGet]
        public IActionResult GetQuartzItemsHomePagePartialView()
        {
            return PartialView("QuartzItemsHomePagePartial");
        }
        #endregion

        #region Information
        [HttpPost]
        public IActionResult AddInformationJSON(QuartzItemsInformationAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _informationService.AddInformation(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            else {
                var errors = ModelState.Values.SelectMany(v => v.Errors);
                return Ok(errors);
            }
            //return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateInformationJSON(QuartzItemsInformationUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _informationService.UpdateInformation(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetInformationDetailJSON(int quartzItemId)
        {
            ViewBag.Information = _informationService.GetInformationDetail(quartzItemId);
            var model = _informationService.GetInformationDetail(quartzItemId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetInformationPartialView()
        {
            return PartialView("QuartzItemsInformationPartial");
        }
        #endregion

        #region Inspection
        [HttpPost]
        public IActionResult AddInspectionJSON(QuartzItemsInspectionAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                var id = _inspectionService.AddInspection(model);
                var responseModel = _inspectionService.GetInspectionDetail(id);
                var jSonModel = JsonConvert.SerializeObject(responseModel, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateInspectionJSON(QuartzItemsInspectionUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _inspectionService.UpdateInspection(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetInspectionDetailJSON(int inspectionId)
        {
            var model = _inspectionService.GetInspectionDetail(inspectionId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllInspections(int quartzItemId)
        {
            var model = _inspectionService.GetAllInspections(quartzItemId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteInspection(QuartzItemsInspectionDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _inspectionService.DeleteInspection(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetInspectionPartialView()
        {
            return PartialView("QuartzItemsInspectionPartial");
        }

        [HttpGet]
        public IActionResult GetInspectionsDataPartialView()
        {
            return PartialView("QuartzItemsInspectionsDataPartial");
        }
        
        [HttpGet]
        public IActionResult GetInspectionsAttachmentPartialView()
        {
            return PartialView("QuartzItemsInspectionsAttachmentPartial");
        }

        #endregion

        #region Attachment
        public IActionResult GetAttachmentPartialView()
        {
            return PartialView("QuartzItemsAttachmentPartial");
        }
        #endregion

        #region Valve Maintenance
        [HttpPost]
        public IActionResult AddValveMaintenanceJSON(QuartzItemsValveMaintenanceAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                var id = _quartzItemsValveMaintenanceService.AddValveMaintenance(model);
                var responseModel = _quartzItemsValveMaintenanceService.GetValveMaintenanceDetail(id);
                var jSonModel = JsonConvert.SerializeObject(responseModel, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }
        
        [HttpPost]
        public IActionResult UpdateValveMaintenanceJSON(QuartzItemsValveMaintenanceUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _quartzItemsValveMaintenanceService.UpdateValveMaintenance(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetValveMaintenanceDetailJSON(int valveMaintenanceId)
        {
            var model = _quartzItemsValveMaintenanceService.GetValveMaintenanceDetail(valveMaintenanceId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllValveMaintenancesJSON(int quartzItemId)
        {
            var model = _quartzItemsValveMaintenanceService.GetAllValveMaintenances(quartzItemId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteValveMaintenance(QuartzItemsValveMaintenanceDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _quartzItemsValveMaintenanceService.DeleteValveMaintenance(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetValveMaintenancePartialView()
        {
            return PartialView("QuartzItemsValveMaintenancePartial");
        }

        [HttpGet]
        public IActionResult GetValveMaintenanceDataPartialView()
        {
            return PartialView("QuartzItemsValveMaintenancesDataPartial");
        }

        [HttpGet]
        public IActionResult GetValveMaintenancesAttachmentPartialView()
        {
            return PartialView("QuartzItemsValveMaintenancesAttachmentPartial");
        }
        #endregion

        #region Thickness Measurement
        [HttpPost]
        public IActionResult AddThicknessMeasurementJSON(QuartzItemsThicknessMeasurementAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                var id = _quartzItemsThicknessMeasurementService.AddThicknessMeasurement(model);
                var responseModel = _quartzItemsThicknessMeasurementService.GetThicknessMeasurementDetail(id);
                var jSonModel = JsonConvert.SerializeObject(responseModel, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateThicknessMeasurementJSON(QuartzItemsThicknessMeasurementUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _quartzItemsThicknessMeasurementService.UpdateThicknessMeasurement(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetThicknessMeasurementDetailJSON(int thicknessMeasurementId)
        {
            var model = _quartzItemsThicknessMeasurementService.GetThicknessMeasurementDetail(thicknessMeasurementId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllThicknessMeasurementsJSON(int quartzItemId)
        {
            var model = _quartzItemsThicknessMeasurementService.GetAllThicknessMeasurements(quartzItemId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteThicknessMeasurement(QuartzItemsThicknessMeasurementDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _quartzItemsThicknessMeasurementService.DeleteThicknessMeasurement(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetThicknessMeasurementPartialView()
        {
            return PartialView("QuartzItemsThicknessMeasurementPartial");
        }

        [HttpGet]
        public IActionResult GetThicknessMeasurementsDataPartialView()
        {
            return PartialView("QuartzItemsThicknessMeasurementsDataPartial");
        }

        [HttpGet]
        public IActionResult GetThicknessMeasurementsAttachmentPartialView()
        {
            return PartialView("QuartzItemsThicknessMeasurementsAttachmentPartial");
        }
        #endregion

        #region Search

            #region Inspection

        [HttpPost]
        public IActionResult FilterInspections(QuartzItemsInspectionFilterViewModel model)
        {
            var rModel = _inspectionService.FilterInspections(model);
            var jSonModel = JsonConvert.SerializeObject(rModel, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetSearchPanelsInspectionPartialView()
        {
            return PartialView("SearchPanelsInspectionPartial");
        }

        #endregion

            #region Valve Maintenance

        [HttpPost]
        public IActionResult FilterValveMaintenances(QuartzItemsValveMaintenanceFilterViewModel model)
        {
            var rModel = _quartzItemsValveMaintenanceService.FilterValveMaintenances(model);
            var jSonModel = JsonConvert.SerializeObject(rModel, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetSearchPanelsValveMaintenancePartialView()
        {
            return PartialView("SearchPanelsValveMaintenancePartial");
        }

        #endregion

        #region Thickness Measurement

        [HttpPost]
        public IActionResult FilterThicknessMeasurements(QuartzItemsThicknessMeasurementFilterViewModel model)
        {
            var rModel = _quartzItemsThicknessMeasurementService.FilterThicknessMeasurements(model);
            var jSonModel = JsonConvert.SerializeObject(rModel, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetSearchPanelsThicknessMeasurementPartialView()
        {
            return PartialView("SearchPanelsThicknessMeasurementPartial");
        }

        #endregion

        #endregion
    }
}