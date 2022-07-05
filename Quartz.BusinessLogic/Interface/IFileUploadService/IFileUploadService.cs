using Microsoft.AspNetCore.Http;
using Quartz.Common.ViewModels.FileUpload.FileUploadViewModels;
using Quartz.Entities.Concrete.FileUploads;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.IFileUploadService
{
    public interface IFileUploadService : IGenericService<FileUpload>
    {
        Task<FileUpload> UploadFile(IFormFileCollection files);
        List<FileUploadListViewModel> GetAllFiles(int mainId, string mainType);
        void UpdateFile(FileUploadUpdateViewModel model);
    }
}
