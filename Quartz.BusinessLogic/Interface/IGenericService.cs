using Quartz.Entities.Interface;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Quartz.BusinessLogic.Interface
{
    public interface IGenericService<Table> where Table : class, ITable, new()
    {
        void Add(Table entity);
        void Delete(Table entity);
        void Update(Table entity);
        IQueryable<Table> GetAll(Expression<Func<Table, bool>> filter = null, Func<IQueryable<Table>, IOrderedQueryable<Table>> orderBy = null, string includeProperties = null);
        Table GetFirstOrDefult(Expression<Func<Table, bool>> filter = null, string includeProperties = null);
        Table GetById(int id);
    }
}
