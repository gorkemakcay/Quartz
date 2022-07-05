using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Common.ViewModels.FileUpload.FileUploadViewModels
{
    public class FileUploadUpdateViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Extension { get; set; }
        public string Path { get; set; }
        public string UploadedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int MainId { get; set; } // Dosyanın ait olduğu yerin Id'si
        public string MainType { get; set; } // Dosyanın ait olduğu yerin tipi
    }
}
