using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsInspectionViewModels;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Projects.Item;
using System.Collections.Generic;
using System.Linq;

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
            using var context = new QuartzContext();

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

        public void DeleteInspection(QuartzItemsInspectionDeleteViewModel model)
        {
            Delete(_mapper.Map<QuartzItemsInspection>(model));
            _uow.SaveChange();
        }

        public List<QuartzItemsInspectionFilterViewModel> FilterInspections(QuartzItemsInspectionFilterViewModel model)
        {
            var inspections = _mapper.Map<List<QuartzItemsInspectionFilterViewModel>>(GetAll());

            if (model.ReportNo != null)
                inspections = inspections.Where(I => I.ReportNo != null && I.ReportNo.ToLower().Contains(model.ReportNo.ToLower())).ToList();

            if (model.Details != null)
                inspections = inspections.Where(I => I.Details != null && I.Details.ToLower().Contains(model.Details.ToLower())).ToList();

            if (model.Date.ToString() != "1.01.0001 00:00:00")
                inspections = inspections.Where(I => I.Date == model.Date).ToList();

            if (model.DueDate.ToString() != "1.01.0001 00:00:00")
                inspections = inspections.Where(I => I.DueDate == model.DueDate).ToList();

            if (model.Status != "select")
                inspections = inspections.Where(I => I.Status != null && I.Status == model.Status).ToList();

            if (model.Technique != "select")
                inspections = inspections.Where(I => I.Technique != null && I.Technique == model.Technique).ToList();

            if (model.Method != "select")
                inspections = inspections.Where(I => I.Method != null && I.Method == model.Method).ToList();

            if (model.Procedure != "select")
                inspections = inspections.Where(I => I.Procedure != null && I.Procedure == model.Procedure).ToList();

            return inspections;
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
