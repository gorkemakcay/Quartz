using Quartz.Entities.Concrete.Documents;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.Common.ViewModels.Documents.DocumentViewModels
{
    public class DocumentAddViewModel
    {
        public int MemberId { get; set; }
        public string MemberOf { get; set; }

        public string Name { get; set; }
        public string DocumentType { get; set; }
        public string Extension { get; set; }
        public string Description { get; set; }
        public string UploadedBy { get; set; }
        public string DocumentPath { get; set; }
        public DateTime? UploadedDate { get; set; }
    }
}
