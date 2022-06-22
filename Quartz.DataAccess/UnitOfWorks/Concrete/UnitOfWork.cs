using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Documents;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Projects;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Projects.Items;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Repositories.Users;
using Quartz.DataAccess.Interface;
using Quartz.DataAccess.Interface.Documents;
using Quartz.DataAccess.Interface.Projects;
using Quartz.DataAccess.Interface.Projects.Items;
using Quartz.DataAccess.Interface.Users;
using Quartz.DataAccess.UnitOfWorks.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.UnitOfWorks.Concrete
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly QuartzContext _ctx;

        public IAppRoleDal appRoleDal { get; private set; }

        public IAppUserDal appUserDal { get; private set; }

        public IDocumentDal documentDal { get; private set; }

        public IQuartzDal quartzDal { get; private set; }

        public ILinkDal linkDal { get; private set; }

        public IItemDal itemDal { get; private set; }

        public IInformationDal informationDal { get; private set; }

        public IInspectionDal inspectionDal { get; private set; }

        public UnitOfWork(QuartzContext ctx)
        {
            _ctx = ctx;

            appRoleDal = new EfAppRoleRepository(_ctx);
            appUserDal = new EfAppUserRepository(_ctx);
            documentDal = new EfDocumentRepository(_ctx);
            quartzDal = new EfQuartzRepository(_ctx);
            linkDal = new EfLinkRepository(_ctx);
            itemDal = new EfItemRepository(_ctx);
            informationDal = new EfInformationRepository(_ctx);
            inspectionDal = new EfInspectionRepository(_ctx);
        }

        public void Dispose()
        {
            _ctx.Dispose();
        }

        public void SaveChange()
        {
            try
            {
                _ctx.SaveChanges();
            }
            catch
            {

                throw;
            }
            finally
            {

            }
        }

        IGenericDal<Table> IUnitOfWork.GetRepository<Table>()
        {
            return new EfGenericRepository<Table>(_ctx);
        }
    }
}
