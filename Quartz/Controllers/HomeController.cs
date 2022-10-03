using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quartz.Models;
using System.Diagnostics;

namespace Quartz.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Authorize]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LogIn()
        {
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
