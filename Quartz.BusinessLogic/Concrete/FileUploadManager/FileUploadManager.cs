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

        public void UpdateFile(FileUploadUpdateViewModel model)
        {
            //var file = _mapper.Map<FileUploadUpdateViewModel>(GetById(fileId));
            //file.MainId = mainId;
            //file.MainType = mainType;
            //Update(_mapper.Map<FileUpload>(file));
            //_uow.SaveChange();

            //return file;

            Update(_mapper.Map<FileUpload>(model));
            _uow.SaveChange();
        }

        public async Task<FileUpload> UploadFile(IFormFileCollection files)
        {
            foreach (IFormFile file in files)
            {
                var basePath = $"wwwroot/Files";
                bool basePathIsExists = Directory.Exists(basePath);
                if (!basePathIsExists)
                    Directory.CreateDirectory(basePath);
                var fileName = Path.GetFileNameWithoutExtension(file.FileName);
                var filePath = Path.Combine(basePath, file.FileName);
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
                        //MainId = mainId,
                        //MainType = mainType,
                        Path = filePath,
                        Type = file.ContentType,
                        Name = fileName,
                        UploadedBy = "Görkem"
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