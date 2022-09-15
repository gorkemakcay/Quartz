using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
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

namespace Quartz.Controllers.LookUpItems
{
    public class LookUpItemsController : Controller
    {
        #region Dependency Injection & Constructor
        private readonly ILookUpItemsComponentTypeService _componentTypeService;
        private readonly ILookUpItemsFittingTypeService _fittingTypeService;
        private readonly ILookUpItemsMethodService _methodService;
        private readonly ILookUpItemsOperatorService _operatorService;
        private readonly ILookUpItemsPlantAreaService _plantAreaService;
        private readonly ILookUpItemsPlantSystemService _plantSystemService;
        private readonly ILookUpItemsProcedureService _procedureService;
        private readonly ILookUpItemsSpecificationService _specificationService;
        private readonly ILookUpItemsStandardStatementService _standardStatementService;
        private readonly ILookUpItemsStatusService _statusService;
        private readonly ILookUpItemsTechniqueService _techniqueService;
        private readonly ILookUpItemsWeldTypeService _weldTypeService;
        public LookUpItemsController(ILookUpItemsComponentTypeService componentTypeService,
                                     ILookUpItemsFittingTypeService fittingTypeService,
                                     ILookUpItemsMethodService methodService,
                                     ILookUpItemsOperatorService operatorService,
                                     ILookUpItemsPlantAreaService plantAreaService,
                                     ILookUpItemsPlantSystemService plantSystemService,
                                     ILookUpItemsProcedureService procedureService,
                                     ILookUpItemsSpecificationService specificationService,
                                     ILookUpItemsStandardStatementService standardStatementService,
                                     ILookUpItemsStatusService statusService,
                                     ILookUpItemsTechniqueService techniqueService,
                                     ILookUpItemsWeldTypeService weldTypeService)
        {
            _componentTypeService = componentTypeService;
            _fittingTypeService = fittingTypeService;
            _methodService = methodService;
            _operatorService = operatorService;
            _plantAreaService = plantAreaService;
            _plantSystemService = plantSystemService;
            _procedureService = procedureService;
            _specificationService = specificationService;
            _standardStatementService = standardStatementService;
            _statusService = statusService;
            _techniqueService = techniqueService;
            _weldTypeService = weldTypeService;
        }
        #endregion

        #region Component Type
        [HttpPost]
        public IActionResult AddComponentTypeJSON(LookUpItemsComponentTypeAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _componentTypeService.AddComponentType(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateComponentTypeJSON(LookUpItemsComponentTypeUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _componentTypeService.UpdateComponentType(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetComponentTypeDetailJSON(int componentTypeId)
        {
            var model = _componentTypeService.GetComponentTypeDetail(componentTypeId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllComponentTypesJSON()
        {
            var model = _componentTypeService.GetAllComponentTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteComponentType(LookUpItemsComponentTypeDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _componentTypeService.DeleteComponentType(model);
            }
                return Json(null);
        }

        [HttpGet]
        public IActionResult GetComponentTypePartialView()
        {
            return PartialView("LookUpItemsComponentTypePartial");
        }
        #endregion

        #region Fitting Type
        [HttpPost]
        public IActionResult AddFittingTypeJSON(LookUpItemsFittingTypeAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _fittingTypeService.AddFittingType(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateFittingTypeJSON(LookUpItemsFittingTypeUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _fittingTypeService.UpdateFittingType(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetFittingTypeDetailJSON(int fittingTypeId)
        {
            var model = _fittingTypeService.GetFittingTypeDetail(fittingTypeId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllFittingTypesJSON()
        {
            var model = _fittingTypeService.GetAllFittingTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteFittingType(LookUpItemsFittingTypeDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _fittingTypeService.DeleteFittingType(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetFittingTypePartialView()
        {
            return PartialView("LookupItemsFittingTypePartial");
        }
        #endregion

        #region Method
        [HttpPost]
        public IActionResult AddMethodJSON(LookUpItemsMethodAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _methodService.AddMethod(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateMethodJSON(LookUpItemsMethodUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _methodService.UpdateMethod(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetMethodDetailJSON(int methodId)
        {
            var model = _methodService.GetMethodDetail(methodId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllMethodsJSON()
        {
            var model = _methodService.GetAllMethods();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteMethod(LookUpItemsMethodDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _methodService.DeleteMethod(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetMethodPartialView()
        {
            return PartialView("LookupItemsMethodPartial");
        }
        #endregion

        #region Operator
        [HttpPost]
        public IActionResult AddOperatorJSON(LookUpItemsOperatorAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _operatorService.AddOperator(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateOperatorJSON(LookUpItemsOperatorUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _operatorService.UpdateOperator(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetOperatorDetailJSON(int operatorId)
        {
            var model = _operatorService.GetOperatorDetail(operatorId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllOperatorsJSON()
        {
            var model = _operatorService.GetAllOperators();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteOperator(LookUpItemsOperatorDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _operatorService.DeleteOperator(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetOperatorPartialView()
        {
            return PartialView("LookupItemsOperatorPartial");
        }
        #endregion

        #region Plant Area
        [HttpPost]
        public IActionResult AddPlantAreaJSON(LookUpItemsPlantAreaAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _plantAreaService.AddPlantArea(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdatePlantAreaJSON(LookUpItemsPlantAreaUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _plantAreaService.UpdatePlantArea(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetPlantAreaDetailJSON(int plantAreaId)
        {
            var model = _plantAreaService.GetPlantAreaDetail(plantAreaId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllPlantAreasJSON()
        {
            var model = _plantAreaService.GetAllPlantAreas();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeletePlantArea(LookUpItemsPlantAreaDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _plantAreaService.DeletePlantArea(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetPlantAreaPartialView()
        {
            return PartialView("LookUpItemsPlantAreaPartial");
        }
        #endregion

        #region Plant System
        [HttpPost]
        public IActionResult AddPlantSystemJSON(LookUpItemsPlantSystemAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _plantSystemService.AddPlantSystem(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdatePlanSystemJSON(LookUpItemsPlantSystemUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _plantSystemService.UpdatePlantSystem(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetPlantSystemDetailJSON(int plantSystemId)
        {
            var model = _plantSystemService.GetPlantSystemDetail(plantSystemId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllPlantSystemsJSON()
        {
            var model = _plantSystemService.GetAllPlantSystems();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeletePlantSystem(LookUpItemsPlantSystemDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _plantSystemService.DeletePlantSystem(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetPlantSystemPartialView()
        {
            return PartialView("LookupItemsPlantSystemPartial");
        }
        #endregion

        #region Procedure
        [HttpPost]
        public IActionResult AddProcedureJSON(LookUpItemsProcedureAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _procedureService.AddProcedure(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateProcedureJSON(LookUpItemsProcedureUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _procedureService.UpdateProcedure(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetProcedureDetailJSON(int procedureId)
        {
            var model = _procedureService.GetProcedureDetail(procedureId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllProceduresJSON()
        {
            var model = _procedureService.GetAllProcedures();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteProcedure(LookUpItemsProcedureDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _procedureService.DeleteProcedure(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetProcedurePartialView()
        {
            return PartialView("LookupItemsProcedurePartial");
        }
        #endregion

        #region Specification
        [HttpPost]
        public IActionResult AddSpecificationJSON(LookUpItemsSpecificationAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _specificationService.AddSpecification(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateSpecificationJSON(LookUpItemsSpecificationUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _specificationService.UpdateSpecification(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetSpecificationDetailJSON(int specificationId)
        {
            var model = _specificationService.GetSpecificationDetail(specificationId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllSpecificationsJSON()
        {
            var model = _specificationService.GetAllSpecifications();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteSpecification(LookUpItemsSpecificationDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _specificationService.DeleteSpecification(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetSpecificationPartialView()
        {
            return PartialView("LookupItemsSpecificationPartial");
        }
        #endregion

        #region Standard Statement
        [HttpPost]
        public IActionResult AddStandardStatementJSON(LookUpItemsStandardStatementAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _standardStatementService.AddStandardStatement(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateStandardStatementJSON(LookUpItemsStandardStatementUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _standardStatementService.UpdateStandardStatement(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetStandardStatementDetailJSON(int standardStatementId)
        {
            var model = _standardStatementService.GetStandardStatementDetail(standardStatementId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllStandardStatementsJSON()
        {
            var model = _standardStatementService.GetAllStandardStatements();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteStandardStatement(LookUpItemsStandardStatementDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _standardStatementService.DeleteStandardStatement(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetStandardStatementPartialView()
        {
            return PartialView("LookupItemsStandardStatementPartial");
        }
        #endregion

        #region Status
        [HttpPost]
        public IActionResult AddStatusJSON(LookUpItemsStatusAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _statusService.AddStatus(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateStatusJSON(LookUpItemsStatusUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _statusService.UpdateStatus(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetStatusDetailJSON(int statusId)
        {
            var model = _statusService.GetStatusDetail(statusId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllStatusesJSON()
        {
            var model = _statusService.GetAllStatuses();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteStatus(LookUpItemsStatusDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _statusService.DeleteStatus(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetStatusPartialView()
        {
            return PartialView("LookupItemsStatusPartial");
        }
        #endregion

        #region Technique
        [HttpPost]
        public IActionResult AddTechniqueJSON(LookUpItemsTechniqueAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _techniqueService.AddTechnique(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateTechniqueJSON(LookUpItemsTechniqueUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _techniqueService.UpdateTechnique(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetTechniqueDetailJSON(int techniqueId)
        {
            var model = _techniqueService.GetTechniqueDetail(techniqueId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllTechniquesJSON()
        {
            var model = _techniqueService.GetAllTechniques();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteTechnique(LookUpItemsTechniqueDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _techniqueService.DeleteTechnique(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetTechniquePartialView()
        {
            return PartialView("LookupItemsTechniquePartial");
        }
        #endregion

        #region Weld Type
        [HttpPost]
        public IActionResult AddWeldTypeJSON(LookUpItemsWeldTypeAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _weldTypeService.AddWeldType(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateWeldTypeJSON(LookUpItemsWeldTypeUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _weldTypeService.UpdateWeldType(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetWeldTypeDetailJSON(int weldTypeId)
        {
            var model = _weldTypeService.GetWeldTypeDetail(weldTypeId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllWeldTypesJSON()
        {
            var model = _weldTypeService.GetAllWeldTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteWeldType(LookUpItemsWeldTypeDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _weldTypeService.DeleteWeldType(model);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetWeldTypePartialView()
        {
            return PartialView("LookupItemsWeldTypePartial");
        }
        #endregion

        #region Get All Lookup Items For Select > Option

        [HttpGet]
        public IActionResult GetPlantAreaForOption()
        {
            var model = _plantAreaService.GetAllPlantAreas();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetMethodForOption()
        {
            var model = _methodService.GetAllMethods();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetProcedureForOption()
        {
            var model = _procedureService.GetAllProcedures();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetPlantSystemForOption()
        {
            var model = _plantSystemService.GetAllPlantSystems();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetComponentTypeForOption()
        {
            var model = _componentTypeService.GetAllComponentTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetSpecificationForOption()
        {
            var model = _specificationService.GetAllSpecifications();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetFittingTypeForOption()
        {
            var model = _fittingTypeService.GetAllFittingTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetOperatorForOption()
        {
            var model = _operatorService.GetAllOperators();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetStandardStatementForOption()
        {
            var model = _standardStatementService.GetAllStandardStatements();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetStatusForOption()
        {
            var model = _statusService.GetAllStatuses();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetTechniqueForOption()
        {
            var model = _techniqueService.GetAllTechniques();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            { 
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetWeldTypeForOption()
        {
            var model = _weldTypeService.GetAllWeldTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings() 
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        #endregion
    }
}
