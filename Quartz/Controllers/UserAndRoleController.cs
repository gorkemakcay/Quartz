using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.Entities.Concrete.Users;
using Quartz.Models;
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

        #region User

        #region Partial Views

        [HttpGet]
        public IActionResult GetUserListPartialView()
        {
            return PartialView("UserListPartial");
        }

        [HttpGet]
        public IActionResult AddUserPartialView()
        {
            return PartialView("AddUserPartial");
        }

        [HttpGet]
        public IActionResult UpdateUserPartialView()
        {
            return PartialView("UpdateUserPartial");
        }

        #endregion

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _userManager.Users.ToList();
            var jSonModel = JsonConvert.SerializeObject(users, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public async Task<IActionResult> GetUserDetail(int userId)
        {
            var user = _userManager.Users.FirstOrDefault(I => I.Id == userId);
            var userRoles = await _userManager.GetRolesAsync(user);
            TempData["UserId"] = userId;

            UserUpdateViewModel userUpdate = new();
            userUpdate.Id = user.Id;
            userUpdate.FirstName = user.FirstName;
            userUpdate.LastName = user.LastName;
            userUpdate.UserName = user.UserName;
            userUpdate.Email = user.Email;

            if (userRoles.Contains("Admin"))
                userUpdate.AdminRole = true;
            else 
                userUpdate.AdminRole = false;

            if (userRoles.Contains("Operator"))
                userUpdate.OperatorRole = true;
            else
                userUpdate.OperatorRole = false;

            var jSonModel = JsonConvert.SerializeObject(userUpdate, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAppUserDetail(int userId)
        {
            var user = _userManager.Users.FirstOrDefault(I => I.Id == userId);
            var jSonModel = JsonConvert.SerializeObject(user, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateUser(AppUser model)
        {
            await _userManager.UpdateAsync(model);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteUser(AppUser model)
        {
            await _userManager.DeleteAsync(model);
            return Json("Ok!");
        }

        #endregion

        #region Role

        [HttpPost]
        public async Task<IActionResult> UpdateUserRole(UserRoleUpdateViewModel model)
        {
            var user = _userManager.Users.FirstOrDefault(I => I.Id == model.Id);
            if (model.AdminRole)
                await _userManager.AddToRoleAsync(user, "Admin");
            else 
                await _userManager.RemoveFromRoleAsync(user, "Admin");

            if (model.OperatorRole)
                await _userManager.AddToRoleAsync(user, "Operator");
            else
                await _userManager.RemoveFromRoleAsync(user, "Operator");

            return Json("Ok!");
        }

        public async  Task<IActionResult> AssignRole(List<RoleAssignViewModel> model)
        {
            var userId = (int)TempData["UserId"];
            var user = _userManager.Users.FirstOrDefault(I => I.Id == userId);
            foreach (var item in model)
            {
                if (item.Exists)
                {
                    await _userManager.AddToRoleAsync(user, item.Name);
                }
                else
                {
                    await _userManager.RemoveFromRoleAsync(user, item.Name);
                }
            }
            return Json("OK!");
        }

        #endregion
    }
}
