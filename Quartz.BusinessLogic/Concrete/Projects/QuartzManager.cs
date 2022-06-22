using AutoMapper;
using Quartz.BusinessLogic.Interface.Projects;
using Quartz.Common.ViewModels.Projects.QuartzViewModels;
using Quartz.DataAccess.UnitOfWorks.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.BusinessLogic.Concrete.Projects
{
    public class QuartzManager : GenericManager<Entities.Concrete.Projects.Quartz>, IQuartzService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void AddQuartz(QuartzAddViewModel model)
        {
            Add(_mapper.Map<Entities.Concrete.Projects.Quartz>(model));
            _uow.SaveChange();
        }

        public List<QuartzListViewModel> GetAllQuartzes()
        {
            return _mapper.Map<List<QuartzListViewModel>>(GetAll());
        }

        public void UpdateQuartz(QuartzUpdateViewModel model)
        {
            Update(_mapper.Map<Entities.Concrete.Projects.Quartz>(model));
            _uow.SaveChange();
        }
    }
}
