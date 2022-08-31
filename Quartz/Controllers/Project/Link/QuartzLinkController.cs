using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingFeaturesViewModels;
using Quartz.Common.ViewModels.Project.Link.QuartzLinksDrawingSettingsViewModels;
using Quartz.Common.ViewModels.Project.Link.QuartzLinkViewModels;

namespace Quartz.Controllers.Project.Link
{
    public class QuartzLinkController : Controller
    {
        private readonly IQuartzLinkService _linkService;
        private readonly IQuartzLinksDrawingFeaturesService _drawingFeatureService;
        private readonly IQuartzLinksDrawingSettingsService _drawingSettings;
        public QuartzLinkController(IQuartzLinkService linkService,
                                    IQuartzLinksDrawingFeaturesService drawingFeatures,
                                    IQuartzLinksDrawingSettingsService drawingSettings)
        {
            _linkService = linkService;
            _drawingFeatureService = drawingFeatures;
            _drawingSettings = drawingSettings;
        }

        #region Link
        [HttpPost]
        public IActionResult AddLinkJSON(QuartzLinkAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                var id = _linkService.AddLink(model);
                var responseModel = _linkService.GetLinkDetail(id);
                var jSonModel = JsonConvert.SerializeObject(responseModel, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateLinkJSON(QuartzLinkUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _linkService.UpdateLink(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateLinksTagNo(int linkId, string tagNo)
        {
            _linkService.UpdateLinksTagNo(linkId, tagNo);

            return Ok();
        }

        [HttpGet]
        public IActionResult GetAllLinksJSON(int mainLinkId)
        {
            var model = _linkService.GetAllLinks(mainLinkId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetLinkDetailJSON(int linkId)
        {
            var model = _linkService.GetLinkDetail(linkId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpDelete]
        public IActionResult DeleteLink(QuartzLinkDeleteViewModel model)
        {
            if (ModelState.IsValid)
            {
                _linkService.DeleteLink(model);
            }
            return Json(null);
        }
        #endregion

        #region Drawing Features
        [HttpPost]
        public IActionResult AddDrawingFeaturesJSON(QuartzLinksDrawingFeaturesAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _drawingFeatureService.AddFeature(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateDrawingFeaturesJSON(QuartzLinksDrawingFeaturesUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _drawingFeatureService.UpdateFeature(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetDrawingFeaturesDetailJSON(int drawingFeaturesId)
        {
            var model = _drawingFeatureService.GetDrawingFeaturesDetail(drawingFeaturesId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }
        #endregion

        #region Drawing Settings
        [HttpPost]
        public IActionResult AddDrawingSettingsJSON(QuartzLinksDrawingSettingsAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _drawingSettings.AddDrawingSettings(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpPost]
        public IActionResult UpdateDrawingSettingsJSON(QuartzLinksDrawingSettingsUpdateViewModel model)
        {
            if (ModelState.IsValid)
            {
                _drawingSettings.UpdateDrawingSettings(model);
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetDrawingSettingsDetailJSON(int quartzLinkId)
        {
            var model = _drawingSettings.GetDrawingSettingsDetail(quartzLinkId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetDrawingSettingsDataPartialView()
        {
            return PartialView("QuartzLinksDrawingSettingsDataPartial");
        }

        [HttpGet]
        public IActionResult GetDrawingSettingsAttachmentPartialView()
        {
            return PartialView("QuartzLinksDrawingSettingsAttachmentPartial");
        }
        #endregion

        [HttpGet]
        public IActionResult GetVectorSource(int quartzLinkId)
        {
            var model = _drawingFeatureService.GetVectorSource(quartzLinkId);
            if (model == null || model.Features == null || model.Features == "")
                return Ok(0);
            else
            {
                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
        }

        [HttpGet]
        public IActionResult GetQuartz()
        {
            return PartialView("/Views/Shared/Partial/HomePage/QuartzPartial.cshtml");
        }
    }
}
