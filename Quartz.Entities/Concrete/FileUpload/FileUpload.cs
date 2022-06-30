using Quartz.Entities.Interface;
using System;

namespace Quartz.Entities.Concrete.FileUploads
{
    public class FileUpload : ITable
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
