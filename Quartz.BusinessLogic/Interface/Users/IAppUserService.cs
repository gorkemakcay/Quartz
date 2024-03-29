﻿using Microsoft.AspNetCore.Identity;
using Quartz.Common.ViewModels.Users.AppUserViewModels;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Users
{
    public interface IAppUserService : IGenericService<AppUser>
    {
        Task<string> LogIn(AppUserLogInViewModel model);
        List<AppUserListViewModel> GetAllUser();
        Task<IdentityResult> Registration(AppUserAddViewModel model);
        AppUserUpdateViewModel GetUserInfo(int userId);
        Task<IdentityResult> UpdateUser(AppUserUpdateViewModel model);
        Task<AppUser> FindByIdAsync(int userId);
    }
}
