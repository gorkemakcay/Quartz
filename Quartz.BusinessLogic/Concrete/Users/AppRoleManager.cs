using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Quartz.BusinessLogic.Interface.Users;
using Quartz.Common.ViewModels.Users.AppRoleViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Users
{
    public class AppRoleManager : GenericManager<AppRole>, IAppRoleService
    {
        private readonly IUnitOfWork _uow;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IMapper _mapper;

        public AppRoleManager(IUnitOfWork uow, RoleManager<AppRole> roleManager, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _roleManager = roleManager;
            _mapper = mapper;
        }

        /// <summary>
        /// Sisteme rol ekler
        /// </summary>
        /// <param name="model">AppRoleAddViewModel</param>
        /// <returns></returns>
        public async Task<IdentityResult> AddAppRole(AppRoleAddViewModel model)
        {
            AppRole role = new AppRole
            {
                Name = model.Name
            };

            return await _roleManager.CreateAsync(role);
        }

        /// <summary>
        /// Sistemden rol siler
        /// </summary>
        /// <param name="model">AppRoleListViewModel</param>
        public void DeleteAppRole(AppRoleListViewModel model)
        {
            var toBeDeletedRole = _roleManager.Roles.Where(I => I.Id == model.Id).FirstOrDefault();
            Delete(toBeDeletedRole);
            _uow.SaveChange();
        }

        /// <summary>
        /// Sistemde bulunan tüm rolleri getirir
        /// </summary>
        /// <returns>AppRoleListViewModel listesi</returns>
        public List<AppRoleListViewModel> GetAllAppRoles()
        {
            return _mapper.Map<List<AppRoleListViewModel>>(_roleManager.Roles);
        }

        /// <summary>
        /// Güncellenecek rol bilgilerini getirir
        /// </summary>
        /// <param name="roleId"></param>
        /// <returns></returns>
        public AppRoleUpdateViewModel GetAppRoleInfoToUpdate(int roleId)
        {
            return _mapper.Map<AppRoleUpdateViewModel>(_roleManager.Roles.FirstOrDefault(I => I.Id == roleId));
        }

        /// <summary>
        /// Rol güncelleme
        /// </summary>
        /// <param name="model">AppRoleUpdateViewModel</param>
        /// <returns></returns>
        public async Task<IdentityResult> UpdateAppRole(AppRoleUpdateViewModel model)
        {
            var toBeUpdateRole = _roleManager.Roles.Where(I => I.Id == model.Id).FirstOrDefault();
            toBeUpdateRole.Name = model.Name;
            return await _roleManager.UpdateAsync(toBeUpdateRole);
        }
    }
}
