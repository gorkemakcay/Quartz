using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.Common.ViewModels.Project.QuartzItem.QuartzItemsInspectionViewModels;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager
{
    public class QuartzItemsInspectionManager : GenericManager<QuartzItemsInspection>, IQuartzItemsInspectionService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzItemsInspectionManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public int AddInspection(QuartzItemsInspectionAddViewModel model)
        {
            using (var context = new QuartzContext())
            {
                var inspection = new QuartzItemsInspection()
                {
                    ReportNo = model.ReportNo,
                    Method = model.Method,
                    Procedure = model.Procedure,
                    Technique = model.Technique,
                    Status = model.Status,
                    Date = model.Date,
                    DueDate = model.DueDate,
                    CreatedDate = model.CreatedDate,
                    Details = model.Details,
                    QuartzItemId = model.QuartzItemId,
                    AttachmentIds = model.AttachmentIds
                };

                context.QuartzItemsInspections.Add(inspection);
                context.SaveChanges();

                return inspection.Id;
            }
        }

        public List<QuartzItemsInspectionUpdateViewModel> GetAllInspections(int quartzItemId)
        {
            return _mapper.Map<List<QuartzItemsInspectionUpdateViewModel>>(GetAll(I => I.QuartzItemId == quartzItemId));
        }

        public QuartzItemsInspectionUpdateViewModel GetInspectionDetail(int inspectionId)
        {
            return _mapper.Map<QuartzItemsInspectionUpdateViewModel>(GetFirstOrDefult(I => I.Id == inspectionId));
        }

        public void UpdateInspection(QuartzItemsInspectionUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzItemsInspection>(model));
            _uow.SaveChange();
        }
    }
}
