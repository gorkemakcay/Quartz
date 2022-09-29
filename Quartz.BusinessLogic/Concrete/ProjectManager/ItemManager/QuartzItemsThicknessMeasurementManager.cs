using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsThicknessMeasurement;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;
using System.Linq;

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
            using var context = new QuartzContext();
            var thicknessMeasurement = new QuartzItemsThicknessMeasurement()
            {
                PlantArea = model.PlantArea,
                    PlantSystem = model.PlantSystem,
                    Specification = model.Specification,
                    NominalThickness = model.NominalThickness,
                    MeasuredThickness = model.MeasuredThickness,
                    Description = model.Description,
                    CreatedDate = model.CreatedDate,
                    AttachmentIds = model.AttachmentIds,
                    QuartzItemId = model.QuartzItemId
                };

            context.QuartzItemsThicknessMeasurements.Add(thicknessMeasurement);
            context.SaveChanges();

            return thicknessMeasurement.Id;
        }

        public void DeleteThicknessMeasurement(QuartzItemsThicknessMeasurementDeleteViewModel model)
        {
            Delete(_mapper.Map<QuartzItemsThicknessMeasurement>(model));
            _uow.SaveChange();
        }

        public List<QuartzItemsThicknessMeasurementFilterViewModel> FilterThicknessMeasurements(QuartzItemsThicknessMeasurementFilterViewModel model)
        {
            var filteredThicknessMeasurements = _mapper.Map<List<QuartzItemsThicknessMeasurementFilterViewModel>>(GetAll());

            if (model.NominalThickness != 0)
                filteredThicknessMeasurements = filteredThicknessMeasurements.Where(I => I.NominalThickness != 0 && I.NominalThickness == model.NominalThickness).ToList();

            if (model.MeasuredThickness != 0)
                filteredThicknessMeasurements = filteredThicknessMeasurements.Where(I => I.MeasuredThickness != 0 && I.MeasuredThickness == model.MeasuredThickness).ToList();

            if (model.Description != null)
                filteredThicknessMeasurements = filteredThicknessMeasurements.Where(I => I.Description != null && I.Description.Contains(model.Description)).ToList();

            if (model.Specification != "value")
                filteredThicknessMeasurements = filteredThicknessMeasurements.Where(I => I.Specification != null && I.Specification == model.Specification).ToList();

            if (model.PlantArea != "value")
                filteredThicknessMeasurements = filteredThicknessMeasurements.Where(I => I.PlantArea != null && I.PlantArea == model.PlantArea).ToList();

            if (model.PlantSystem != "value")
                filteredThicknessMeasurements = filteredThicknessMeasurements.Where(I => I.PlantSystem != null && I.PlantSystem == model.PlantSystem).ToList();

            return filteredThicknessMeasurements;
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
