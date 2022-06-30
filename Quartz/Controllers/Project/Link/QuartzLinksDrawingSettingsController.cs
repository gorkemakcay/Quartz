using Microsoft.AspNetCore.Mvc;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quartz.Controllers.Project.Link
{
    public class QuartzLinksDrawingSettingsController : Controller
    {
        private readonly IQuartzLinksDrawingSettingsService _drawingSettingsService;
        public QuartzLinksDrawingSettingsController(IQuartzLinksDrawingSettingsService drawingSettingsService)
        {
            _drawingSettingsService = drawingSettingsService;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
