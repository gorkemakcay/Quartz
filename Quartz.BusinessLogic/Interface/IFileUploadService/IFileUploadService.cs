using Microsoft.AspNetCore.Http;
using Quartz.Common.ViewModels.FileUpload.FileUploadViewModels;
using Quartz.Entities.Concrete.FileUploads;
using Quartz.Entities.Concrete.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.IFileUploadService
{
    public interface IFileUploadService : IGenericService<FileUpload>
    {
        Task<FileUpload> UploadFile(IFormFileCollection files, string user);
        List<FileUploadListViewModel> GetAllFiles();
        List<FileUploadListViewModel> GetAllDrawings();
        void UpdateFile(FileUploadUpdateViewModel model);
        void DeleteFile(int fileId);
        FileUploadUpdateViewModel GetFileDetail(int fileId);
    }
}
