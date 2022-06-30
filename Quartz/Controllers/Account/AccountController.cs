using Microsoft.AspNetCore.Mvc;

namespace Quartz.Controllers.Account
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
