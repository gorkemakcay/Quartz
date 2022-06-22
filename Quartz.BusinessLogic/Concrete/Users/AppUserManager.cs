using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Quartz.BusinessLogic.Interface.Users;
using Quartz.Common.ViewModels.Users.AppUserViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Users
{
    public class AppUserManager : GenericManager<AppUser>, IAppUserService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private IPasswordHasher<AppUser> _passwordHasher;

        public AppUserManager(IUnitOfWork uow,
                              IPasswordHasher<AppUser> passwordHasher,
                              IMapper mapper,
                              SignInManager<AppUser> signInManager,
                              UserManager<AppUser> userManager) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _passwordHasher = passwordHasher;
        }

        public Task<AppUser> FindByIdAsync(int userId)
        {
            AppUser user = (AppUser)Activator.CreateInstance(typeof(AppUser));
            user.UserName = userId.ToString();
            user.PasswordHash = null;

            // I'm suppose to query the database with userId parameter here
            return Task.FromResult<AppUser>(user); // return as is
        }

        public List<AppUserListViewModel> GetAllUser()
        {
            return _mapper.Map<List<AppUserListViewModel>>(GetAll());
        }

        public AppUserUpdateViewModel GetUserInfo(int userId)
        {
            return _mapper.Map<AppUserUpdateViewModel>(GetById(userId));
        }

        public async Task<string> LogIn(AppUserLogInViewModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && String.Equals(user.UserName, model.UserName, StringComparison.CurrentCulture))
            {
                var signInResult = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);
                if (signInResult.Succeeded)
                {
                    var roles = await _userManager.GetRolesAsync(user);
                    return roles[0].ToString();
                }
            }

            return null;
        }

        public async Task<IdentityResult> Registration(AppUserAddViewModel model)
        {
            AppUser user = new AppUser();
            user = _mapper.Map<AppUser>(model);

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return await _userManager.AddToRoleAsync(user, "Member");
            }
            else
                return null;
        }

        public async Task<IdentityResult> UpdateUser(AppUserUpdateViewModel model)
        {
            AppUser user = await _userManager.FindByIdAsync(model.Id.ToString());
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.UserName = model.UserName;
            user.Email = model.Email;
            user.PasswordHash = _passwordHasher.HashPassword(user, model.Password);

            var result = await _userManager.UpdateAsync(user);
            return result;
        }
    }
}
