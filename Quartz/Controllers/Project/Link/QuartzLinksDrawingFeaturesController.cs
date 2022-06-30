using Microsoft.AspNetCore.Mvc;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quartz.Controllers.Project.Link
{
    public class QuartzLinksDrawingFeaturesController : Controller
    {
        private readonly IQuartzLinksDrawingFeaturesService _drawingFeaturesService;
        public QuartzLinksDrawingFeaturesController(IQuartzLinksDrawingFeaturesService drawingFeaturesService)
        {
            _drawingFeaturesService = drawingFeaturesService;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
