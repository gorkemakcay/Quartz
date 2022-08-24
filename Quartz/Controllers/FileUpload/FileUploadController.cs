using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Quartz.BusinessLogic.Interface.IFileUploadService;
using Quartz.Common.ViewModels.FileUpload.FileUploadViewModels;
using System.IO;
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

        [HttpPost]
        public async Task<IActionResult> UploadFile()
        {
            var files = Request.Form.Files;
            var fileModel = _fileUploadService.UploadFile(files);

            var jSonModel = JsonConvert.SerializeObject(fileModel, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpPost]
        public IActionResult UpdateFile(FileUploadUpdateViewModel model)
        {
            _fileUploadService.UpdateFile(model);

            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllFiles()
        {
            var model = _fileUploadService.GetAllFiles();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetAllDrawings()
        {
            var model = _fileUploadService.GetAllDrawings();
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }

        [HttpGet]
        public IActionResult GetFileDetail(int fileId)
        {
            var model = _fileUploadService.GetFileDetail(fileId);
            var jSonModel = JsonConvert.SerializeObject(model, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(jSonModel);
        }


        public async Task<IActionResult> DownloadFile(int fileId)
        {
            var file = _fileUploadService.GetFileDetail(fileId);
            var memory = new MemoryStream();
            using var stream = new FileStream(file.Path, FileMode.Open);

            await stream.CopyToAsync(memory);

            memory.Position = 0;
            return File(memory, file.Type, file.Name + file.Extension);
        }
    }
}
