using AutoMapper;
using Quartz.Common.ViewModels.Documents.DocumentViewModels;
using Quartz.Common.ViewModels.Projects.Items.ItemViewModels;
using Quartz.Common.ViewModels.Projects.LinkViewModels;
using Quartz.Common.ViewModels.Projects.QuartzViewModels;
using Quartz.Common.ViewModels.Users.AppRoleViewModels;
using Quartz.Common.ViewModels.Users.AppUserViewModels;
using Quartz.Entities.Concrete.Documents;
using Quartz.Entities.Concrete.Projects;
using Quartz.Entities.Concrete.Projects.Items;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Common.Mapping.AutoMapperProfile
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            #region Users

            #region AppUser
            CreateMap<AppUser, AppUserAddViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserListViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserUpdateViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserLogInViewModel>().ReverseMap();
            #endregion

            #region AppRole
            CreateMap<AppRole, AppRoleAddViewModel>().ReverseMap();
            CreateMap<AppRole, AppRoleUpdateViewModel>().ReverseMap();
            CreateMap<AppRole, AppRoleListViewModel>().ReverseMap();
            #endregion

            #endregion

            #region Project

            #region Quartz
            CreateMap<Entities.Concrete.Projects.Quartz, QuartzAddViewModel>().ReverseMap();
            CreateMap<Entities.Concrete.Projects.Quartz, QuartzListViewModel>().ReverseMap();
            CreateMap<Entities.Concrete.Projects.Quartz, QuartzUpdateViewModel>().ReverseMap();
            #endregion

            #region Link
            CreateMap<Link, LinkAddViewModel>().ReverseMap();
            CreateMap<Link, LinkListViewModel>().ReverseMap();
            CreateMap<Link, LinkUpdateViewModel>().ReverseMap();
            #endregion

            #region Items
            CreateMap<Item, ItemAddViewModel>().ReverseMap();
            CreateMap<Item, ItemListViewModel>().ReverseMap();
            CreateMap<Item, ItemUpdateViewModel>().ReverseMap();
            #region Item

            #endregion

            #region Information

            #endregion

            #region Inspection

            #endregion

            #endregion

            #endregion

            #region Document
            CreateMap<Document, DocumentAddViewModel>().ReverseMap();
            CreateMap<Document, DocumentListViewModel>().ReverseMap();
            #endregion
        }
    }
}
