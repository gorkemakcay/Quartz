using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Quartz.Entities.Concrete.Users;
using Quartz.Models;
using System.Threading.Tasks;

namespace Quartz.Controllers
{
    [AllowAnonymous]
    public class SignInUserController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        public SignInUserController(SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(UserSignInViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, true);
                if (result.Succeeded)
                {
                    return RedirectToAction("Index", "Home");
                }
                else return View();
            }
            return View();
        }
    }
}
