using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        public IActionResult UploadFile(List<IFormFile> files, int mainId, string mainType)
        {
            return View(_fileUploadService.UploadFile(files, mainId, mainType));
        }

        public IActionResult GetAllFiles(int mainId, string mainType)
        {
            return View(_fileUploadService.GetAllFiles(mainId, mainType));
        }
    }
}
