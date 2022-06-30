using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Interface.IFileUpload;
using Quartz.Entities.Concrete.FileUploads;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.EfFileUploadResository
{
    public class EfFileUploadRepository : EfGenericRepository<FileUpload>, IFileUploadDal
    {
        private readonly QuartzContext _ctx;
        public EfFileUploadRepository(QuartzContext ctx) : base(ctx)
        {
            _ctx = ctx;
        }

    }
}
