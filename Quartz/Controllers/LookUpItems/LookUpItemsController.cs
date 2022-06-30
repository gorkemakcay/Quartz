using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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
using System.Linq;

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
        public IActionResult GetAllComponentTypesJSON()
        {
            ViewBag.ComponentTypes = _componentTypeService.GetAllComponentTypes();
            var model = _componentTypeService.GetAllComponentTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsComponentTypePartial", Json(jSonModel));
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
        public IActionResult GetAllFittingTypesJSON()
        {
            ViewBag.FittingTypes = _fittingTypeService.GetAllFittingTypes();
            var model = _fittingTypeService.GetAllFittingTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookUpItemsFittingTypePartial" ,Json(jSonModel));
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

        public IActionResult GetAllMethodsJSON()
        {
            ViewBag.Methods = _methodService.GetAllMethods();
            var model = _methodService.GetAllMethods();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsMethodPartial", Json(jSonModel));
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
        public IActionResult GetAllOperatorsJSON()
        {
            ViewBag.Operators = _operatorService.GetAllOperators();
            var model = _operatorService.GetAllOperators();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsOperatorPartial", Json(jSonModel));
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
        public IActionResult GetAllPlantAreasJSON()
        {
            ViewBag.PlantAreas = _plantAreaService.GetAllPlantAreas();
            var model = _plantAreaService.GetAllPlantAreas();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsPlantAreaPartial", Json(jSonModel));
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
        public IActionResult GetAllPlantSystemsJSON()
        {
            ViewBag.PlantSystems = _plantSystemService.GetAllPlantSystems();
            //ViewBag.GetPlantAreasForOption = _plantAreaService.GetAllPlantAreas();
            ViewBag.GetPlantAreasForOption = new SelectList(_plantAreaService.GetAll().ToList(), "Name");
            var model = _plantSystemService.GetAllPlantSystems();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsPlantSystemPartial", Json(jSonModel));
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
        public IActionResult GetAllProceduresJSON()
        {
            ViewBag.Procedures = _procedureService.GetAllProcedures();
            var model = _procedureService.GetAllProcedures();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsProcedurePartial", Json(jSonModel));
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
        public IActionResult GetAllSpecificationsJSON()
        {
            ViewBag.Specifications = _specificationService.GetAllSpecifications();
            var model = _specificationService.GetAllSpecifications();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsSpecificationPartial", Json(jSonModel));
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
        public IActionResult GetAllStandardStatementsJSON()
        {
            ViewBag.StandardStatements = _standardStatementService.GetAllStandardStatements();
            var model = _standardStatementService.GetAllStandardStatements();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsStandardStatementPartial", Json(jSonModel));
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
        public IActionResult GetAllStatusesJSON()
        {
            ViewBag.Statuses = _statusService.GetAllStatuses();
            var model = _statusService.GetAllStatuses();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsStatusPartial", Json(jSonModel));
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
        public IActionResult GetAllTechniquesJSON()
        {
            ViewBag.Techniques = _techniqueService.GetAllTechniques();
            var model = _techniqueService.GetAllTechniques();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsTechniquePartial", Json(jSonModel));
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
        public IActionResult GetAllWeldTypesJSON()
        {
            ViewBag.WeldTypes = _weldTypeService.GetAllWeldTypes();
            var model = _weldTypeService.GetAllWeldTypes();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return PartialView("LookupItemsWeldTypePartial", Json(jSonModel));
        }
        #endregion

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
    }
}
