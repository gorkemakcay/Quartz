using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quartz.BusinessLogic.Interface.ILookUpItemsService;
using Quartz.BusinessLogic.Interface.IProjectService.ILinkService;
using Quartz.Models;
using System.Diagnostics;

namespace Quartz.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ILookUpItemsPlantAreaService _plantAreaService;

        public HomeController(ILogger<HomeController> logger,
                              ILookUpItemsPlantAreaService plantAreaService)
        {
            _logger = logger;
            _plantAreaService = plantAreaService;
        }

        public IActionResult Index()
        {
            //ViewBag.GetPlantAreas = _plantAreaService.GetAllPlantAreas();

            return View();
        }

        [HttpGet]
        public IActionResult Get(string path)
        {
            //var path = @"wwwroot\Files\arlentus.png";
            var image = System.IO.File.OpenRead(path);
            return File(image, "image/jpeg");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
