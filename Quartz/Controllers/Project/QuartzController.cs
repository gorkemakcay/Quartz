using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface;
using Quartz.BusinessLogic.Interface.Documents;
using Quartz.BusinessLogic.Interface.Projects;
using Quartz.BusinessLogic.Interface.Projects.Items;
using Quartz.Common.ViewModels.Projects.Items.ItemViewModels;
using Quartz.Common.ViewModels.Projects.QuartzViewModels;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quartz.Controllers.Project
{
    public class QuartzController : Controller
    {
        private readonly IQuartzService _quartzService;
        private readonly ILinkService _linkService;
        private readonly IItemService _itemService;
        private readonly IInformationService _informationService;
        private readonly IInspectionService _inspectionService;
        private readonly IDocumentService _documentService;
        private readonly IFileService _fileService;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public QuartzController(IQuartzService quartzService,
                                ILinkService linkService,
                                IItemService itemService,
                                IInformationService informationService,
                                IInspectionService inspectionService,
                                IDocumentService documentService,
                                IFileService fileService,
                                UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager)
        {
            _quartzService = quartzService;
            _linkService = linkService;
            _itemService = itemService;
            _informationService = informationService;
            _inspectionService = inspectionService;
            _documentService = documentService;
            _fileService = fileService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public IActionResult CreateNewProjectJSON(QuartzAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _quartzService.AddQuartz(model);

                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }

            return View(model);
        }

        public IActionResult AddItemJSON(ItemAddViewModel model)
        {
            if (ModelState.IsValid)
            {
                _itemService.AddItem(model);

                var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                return Json(jSonModel);
            }
            return View(model);
        }
    }
}
