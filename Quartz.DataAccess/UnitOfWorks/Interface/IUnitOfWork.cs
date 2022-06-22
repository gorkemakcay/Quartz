using Quartz.DataAccess.Interface;
using Quartz.DataAccess.Interface.Documents;
using Quartz.DataAccess.Interface.Projects;
using Quartz.DataAccess.Interface.Projects.Items;
using Quartz.DataAccess.Interface.Users;
using Quartz.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.UnitOfWorks.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        IAppRoleDal appRoleDal { get; }
        IAppUserDal appUserDal { get; }
        IDocumentDal documentDal { get; }
        IQuartzDal quartzDal { get; }
        ILinkDal linkDal { get; }
        IItemDal itemDal { get; }
        IInformationDal informationDal { get; }
        IInspectionDal inspectionDal { get; }
        IGenericDal<Table> GetRepository<Table>() where Table : class, ITable, new();

        void SaveChange();
    }
}
