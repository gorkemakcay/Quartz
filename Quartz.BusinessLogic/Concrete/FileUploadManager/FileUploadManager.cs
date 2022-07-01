using AutoMapper;
using Microsoft.AspNetCore.Http;
using Quartz.BusinessLogic.Interface.IFileUploadService;
using Quartz.Common.ViewModels.FileUpload.FileUploadViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.FileUploads;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.FileUploadManager
{
    public class FileUploadManager : GenericManager<FileUpload>, IFileUploadService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public FileUploadManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public List<FileUploadListViewModel> GetAllFiles(int mainId, string mainType)
        {
            return _mapper.Map<List<FileUploadListViewModel>>(GetAll(I => I.MainId == mainId && I.MainType == mainType));
        }

        public async Task<FileUpload> UploadFile(IList<IFormFile> files, int mainId, string mainType)
        {
            foreach (IFormFile file in files)
            {
                var basePath = $"wwwroot/Files";
                bool basePathIsExists = Directory.Exists(basePath);
                if (!basePathIsExists)
                    Directory.CreateDirectory(basePath);
                var fileName = Path.GetFileNameWithoutExtension(mainType + mainId + "_" + file.FileName);
                var filePath = Path.Combine(basePath, mainType + mainId + "_" + file.FileName);
                var extension = Path.GetExtension(file.FileName);
                if (!File.Exists(filePath))
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    var fileModel = new FileUpload
                    {
                        CreatedDate = DateTime.Now,
                        Extension = extension,
                        MainId = mainId,
                        MainType = mainType,
                        Path = filePath,
                        Type = file.ContentType,
                        Name = fileName
                        //UploadedBy = ViewBag.LoginUserFullname
                    };

                    Add(_mapper.Map<FileUpload>(fileModel));
                    _uow.SaveChange();

                    return fileModel;
                }
            }
            return null;
        }
    }
}