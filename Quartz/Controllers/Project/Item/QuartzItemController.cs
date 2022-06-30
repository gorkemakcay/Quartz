using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInformationViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Common.ViewModels.Project.Item.QuartzItemViewModels;
using Quartz.Common.ViewModels.Project.QuartzItem.QuartzItemsInspectionViewModels;

namespace Quartz.Controllers.Project.Item
{
    public class QuartzItemController : Controller
    {
        private readonly IQuartzItemService _itemService;
        private readonly IQuartzItemsInformationService _informationService;
        private readonly IQuartzItemsInspectionService _inspectionService;
        public QuartzItemController(IQuartzItemService itemService,
                                    IQuartzItemsInformationService informationService,
                                    IQuartzItemsInspectionService inspectionService)
        {
            _itemService = itemService;
            _informationService = informationService;
            _inspectionService = inspectionService;
        }

        #region Item
        [HttpPost]
        public IActionResult AddItemJSON(QuartzItemAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _itemService.AddItem(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
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
            return Json(null);
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
        #endregion

        #region Inspection
        [HttpPost]
        public IActionResult AddInspectionJSON(QuartzItemsInspectionAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _inspectionService.AddInspection(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
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
        #endregion

    }
}