using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Quartz.Entities.Concrete.Users;
using Quartz.Models;
using System.Threading.Tasks;

namespace Quartz.Controllers
{
    [AllowAnonymous]
    public class SignUpUserController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        public SignUpUserController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(UserSignUpViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.FullName = model.FirstName + " " + model.LastName;
                AppUser user = new()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    UserName = model.UserName,
                    FullName = model.FullName
                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    return RedirectToAction("Index", "SignInUser");
                }
                else
                {
                    foreach (var item in result.Errors)
                    {
                        ModelState.AddModelError("", item.Description);
                    }
                }
            }
            return View(model);
        }
    }
}
