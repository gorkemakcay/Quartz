using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quartz.Controllers
{
    public class UserAndRoleController : Controller
    {
        private readonly RoleManager<AppRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;
        public UserAndRoleController(RoleManager<AppRole> roleManager, UserManager<AppUser> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }
        public IActionResult Index()
        {
            var roles = _roleManager.Roles.ToList();
            return View();
        }

        public IActionResult GetUserListPartialView()
        {
            return PartialView("UserListPartial");
        }

        public IActionResult AddUserPartialView()
        {
            return PartialView("AddUserPartial");
        }

        public IActionResult GetAllUsers()
        {
            var users = _userManager.Users.ToList();
            var jSonModel = JsonConvert.SerializeObject(users, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

    }
}
