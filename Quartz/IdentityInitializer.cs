using Microsoft.AspNetCore.Identity;
using Quartz.Entities.Concrete.Users;
using System.Threading.Tasks;

namespace Quartz
{
    public static class IdentityInitializer
    {
        public static async Task SeedData(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            var adminRole = await roleManager.FindByNameAsync("Admin");
            if (adminRole == null)
            {
                await roleManager.CreateAsync(new AppRole
                {
                    Name = "Admin"
                });
            }
            var adminUser = await userManager.FindByNameAsync("Administrator");
            if (adminUser == null)
            {
                AppUser user = new AppUser
                {
                    FirstName = "Administrator",
                    LastName = "Quartz",
                    UserName = "admin"
                };
                await userManager.CreateAsync(user, "1");
                await userManager.AddToRoleAsync(user, "Admin");
            }
        }
    }
}
