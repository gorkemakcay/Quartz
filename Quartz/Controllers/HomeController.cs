using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quartz.Entities.Concrete.Users;
using Quartz.Models;
using System.Diagnostics;
using System.Text.Json;

namespace Quartz.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;

        public HomeController(ILogger<HomeController> logger, SignInManager<AppUser> signInManager, UserManager<AppUser> userManager)
        {
            _logger = logger;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [Authorize]
        public IActionResult Index()
        {
            //TempData["user"] = JsonSerializer.Deserialize<AppUser>(user);
            return View();
        }

        [HttpGet]
        public IActionResult GetLoginUserInfo()
        {
            return Json(HttpContext.Session.GetString("user"));
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
