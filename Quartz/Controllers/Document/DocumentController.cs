//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Threading.Tasks;

//namespace Quartz.Controllers.Document
//{
//    public class DocumentController : Controller
//    {
//        private readonly IDocumentService _documentService;
//        private readonly QuartzContext _ctx;

//        public DocumentController(IDocumentService documentService, QuartzContext ctx)
//        {
//            _documentService = documentService;
//            _ctx = ctx;
//        }

//        //[HttpPost]
//        //public IActionResult AddDocument(DocumentAddViewModel model,
//        //                                 List<IFormFile> documents,
//        //                                 int memberId,
//        //                                 string memberOf,
//        //                                 string description)
//        //{
//        //    _documentService.AddDocument(model, documents, memberId, memberOf, description);
//        //    return View();
//        //}

//        ///////////////////////////////////////////////////////////////////////


//        [HttpPost]
//        public async Task<IActionResult> UploadDocument(List<IFormFile> files,
//                                                        string description,
//                                                        int formId,
//                                                        string formType,
//                                                        string addOrUpdate)
//        {
//            foreach (var file in files)
//            {
//                var basePath = $"wwwroot\\Files";
//                bool basePathExists = System.IO.Directory.Exists(basePath);
//                if (!basePathExists) Directory.CreateDirectory(basePath);
//                var fileName = Path.GetFileNameWithoutExtension(formType + formId + "_" + file.FileName);
//                var filePath = Path.Combine(basePath, formType + formId + "_" + file.FileName);
//                var extension = Path.GetExtension(file.FileName);
//                if (!System.IO.File.Exists(filePath))
//                {
//                    using (var stream = new FileStream(filePath, FileMode.Create))
//                    {
//                        await file.CopyToAsync(stream);
//                    }
//                    var fileModel = new Quartz.Entities.Concrete.Documents.Document
//                    {
//                        UploadedDate = DateTime.Now,
//                        DocumentType = file.ContentType,
//                        Extension = extension,
//                        Name = fileName,
//                        Description = description,
//                        DocumentPath = filePath,
//                        MemberId = formId,
//                        MemberOf = formType,
//                        UploadedBy = "Görkem"
//                    };
//                    _ctx.Documents.Add(fileModel);
//                    _ctx.SaveChanges();
//                }
//            }
//            TempData["Message"] = "File successfully uploaded to File System.";
//            if (formType == "WorkOrder" && addOrUpdate == "update")
//                return RedirectToAction("WorkOrderDetail", "WorkOrder", new { id = formId });
//            if (formType == "WorkOrder" && addOrUpdate == "add")
//                return RedirectToAction("WorkOrderAllRecords", "WorkOrder");
//            if (formType == "FinalQuality")
//                return RedirectToAction("Detail", "FinalQuality", new { id = formId });
//            return RedirectToAction("Upload", "Document", new { formId, formType });

//        }

//    }
//}
