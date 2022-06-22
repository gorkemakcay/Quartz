using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.Documents;
using Quartz.Common.ViewModels.Documents.DocumentViewModels;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Documents;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Documents
{
    public class DocumentManager : GenericManager<Document>, IDocumentService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly QuartzContext _ctx;

        public DocumentManager(IUnitOfWork uow, 
                               IMapper mapper,
                               UserManager<AppUser> userManager,
                               QuartzContext ctx) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
            _userManager = userManager;
            _ctx = ctx;
        }

        public async Task<Document> AddDocument(DocumentAddViewModel model, 
                                List<IFormFile> documents,
                                int memberId, 
                                string memberOf,
                                string description)
        {
            foreach (var document in documents)
            {
                var basePath = $"wwwroot/Files";
                bool basePathExists = System.IO.Directory.Exists(basePath);
                if (!basePathExists) Directory.CreateDirectory(basePath);
                var documentName = Path.GetFileNameWithoutExtension(model.MemberOf + model.MemberId + "_" + document.FileName);
                var documentPath = Path.Combine(basePath, model.MemberOf + model.MemberId + "_" + document.FileName);
                var extension = Path.GetExtension(document.FileName);
                if (!System.IO.File.Exists(documentPath))
                {
                    using (var stream = new FileStream(documentPath, FileMode.Create))
                    {
                        await document.CopyToAsync(stream);
                    }
                    var documentModel = new Document
                    {
                        UploadedDate = DateTime.Now,
                        DocumentType = document.ContentType,
                        Extension = extension,
                        Name = documentName,
                        Description = description,
                        DocumentPath = documentPath,
                        MemberId = memberId,
                        MemberOf = memberOf,
                        //UploadedBy = ViewBag.LoginUserFullName
                    };
                    _ctx.Documents.Add(documentModel);
                    _ctx.SaveChanges();
                }
            }
            return new Document { };
        }

        public List<DocumentListViewModel> GetAllDocumentById(int memberId, string memberOf)
        {
            return _mapper.Map<List<DocumentListViewModel>>(GetAll(I => I.MemberId == memberId && I.MemberOf == memberOf));
        }
    }
}
