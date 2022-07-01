using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.IFileUploadService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quartz.Controllers.FileUpload
{
    public class FileUploadController : Controller
    {
        private readonly IFileUploadService _fileUploadService;
        public FileUploadController(IFileUploadService fileUploadService)
        {
            _fileUploadService = fileUploadService;
        }

        //[HttpPost]
        //public IActionResult UploadFile(IList<IFormFile> files, int mainId, string mainType)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var rModel =  _fileUploadService.UploadFile(files, mainId, mainType);

        //        var jSonModel = JsonConvert.SerializeObject(rModel, new JsonSerializerSettings()
        //        {
        //            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        //        });
        //        ViewBag.FileUpload = jSonModel;
        //        return Json(null);
        //    }
        //    return Json(null);
        //}

        [HttpPost]
        public IActionResult UploadFile(IFormFile file)
        {
            
            return Json(null);
        }

        [HttpGet]
        public IActionResult GetAllFiles(int mainId, string mainType)
        {
            var model = _fileUploadService.GetAllFiles(mainId, mainType);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }
    }
}
