using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsThicknessMeasurement;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager
{
    public class QuartzItemsThicknessMeasurementManager : GenericManager<QuartzItemsThicknessMeasurement>, IQuartzItemsThicknessMeasurementService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzItemsThicknessMeasurementManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public int AddThicknessMeasurement(QuartzItemsThicknessMeasurementAddViewModel model)
        {
            using (var context = new QuartzContext())
            {
                var thicknessMeasurement = new QuartzItemsThicknessMeasurement()
                {
                    PlantArea = model.PlantArea,
                    PlantSystem = model.PlantSystem,
                    Specification = model.Specification,
                    NominalThickness = model.NominalThickness,
                    MeasuredThickness = model.MeasuredThickness,
                    Description = model.Description,
                    AttachmentIds = model.AttachmentIds,
                    QuartzItemId = model.QuartzItemId
                };

                context.quartzItemsThicknessMeasurements.Add(thicknessMeasurement);
                context.SaveChanges();

                return thicknessMeasurement.Id;
            }
        }

        public List<QuartzItemsThicknessMeasurementListViewModel> GetAllThicknessMeasurements(int quartzItemId)
        {
            return _mapper.Map<List<QuartzItemsThicknessMeasurementListViewModel>>(GetAll(I => I.QuartzItemId == quartzItemId));
        }

        public QuartzItemsThicknessMeasurementUpdateViewModel GetThicknessMeasurementDetail(int thicknessMeasurementId)
        {
            return _mapper.Map<QuartzItemsThicknessMeasurementUpdateViewModel>(GetFirstOrDefult(I => I.Id == thicknessMeasurementId));
        }

        public void UpdateThicknessMeasurement(QuartzItemsThicknessMeasurementUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzItemsThicknessMeasurement>(model));
            _uow.SaveChange();
        }
    }
}
