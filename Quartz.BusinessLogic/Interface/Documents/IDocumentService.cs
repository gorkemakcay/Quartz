using Microsoft.AspNetCore.Http;
using Quartz.Common.ViewModels.Documents.DocumentViewModels;
using Quartz.Entities.Concrete.Documents;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Interface.Documents
{
    public interface IDocumentService : IGenericService<Document>
    {
        Task<Document> AddDocument(DocumentAddViewModel model, List<IFormFile> files, int memberId, string memberOf, string description);
        List<DocumentListViewModel> GetAllDocumentById(int MemberId, string MemberOf);
    }
}
