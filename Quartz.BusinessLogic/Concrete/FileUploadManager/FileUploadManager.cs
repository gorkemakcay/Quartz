using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        public List<FileUploadListViewModel> GetAllFiles()
        {
            return _mapper.Map<List<FileUploadListViewModel>>(GetAll());
        }

        public void UpdateFile(FileUploadUpdateViewModel model)
        {
            Update(_mapper.Map<FileUpload>(model));
            _uow.SaveChange();
        }

        public async Task<FileUpload> UploadFile(IFormFileCollection files)
        {
            foreach (IFormFile file in files)
            {
                // eski hali: var basePath = $"wwwroot/Files";
                var basePath = @"wwwroot\\Files\\";
                bool basePathIsExists = Directory.Exists(basePath);
                if (!basePathIsExists)
                    Directory.CreateDirectory(basePath);
                var fileName = Path.GetFileNameWithoutExtension(file.FileName);
                var filePath = Path.Combine(basePath, file.FileName);
                var extension = Path.GetExtension(file.FileName);
                if (!File.Exists(filePath))
                {
                    using var stream = new FileStream(filePath, FileMode.Create);

                    await file.CopyToAsync(stream);


                    var fileModel = new FileUpload
                    {
                        CreatedDate = DateTime.Now,
                        Extension = extension,
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

        public FileUploadUpdateViewModel GetFileDetail(int fileId)
        {
            return _mapper.Map<FileUploadUpdateViewModel>(GetById(fileId));
        }

        public List<FileUploadListViewModel> GetAllDrawings()
        {
            return _mapper.Map<List<FileUploadListViewModel>>(GetAll(I => I.Type == "image/jpeg" || I.Type == "image/png"));
        }
    }
}