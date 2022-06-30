using Microsoft.AspNetCore.Identity;
using Quartz.Common.ViewModels.Users.AppRoleViewModels;
using Quartz.Entities.Concrete.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Users
{
    public interface IAppRoleService : IGenericService<AppRole>
    {
        Task<IdentityResult> AddAppRole(AppRoleAddViewModel model);
        void DeleteAppRole(AppRoleListViewModel model);
        AppRoleUpdateViewModel GetAppRoleInfoToUpdate(int roleId);
        List<AppRoleListViewModel> GetAllAppRoles();
        Task<IdentityResult> UpdateAppRole(AppRoleUpdateViewModel model);
    }
}
