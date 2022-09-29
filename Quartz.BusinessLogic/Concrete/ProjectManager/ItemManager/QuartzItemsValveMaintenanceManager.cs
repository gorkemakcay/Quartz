using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsValveMaintenance;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;
using System.Linq;

namespace Quartz.BusinessLogic.Concrete.ProjectManager.ItemManager
{
    public class QuartzItemsValveMaintenanceManager : GenericManager<QuartzItemsValveMaintenance>, IQuartzItemsValveMaintenanceService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public QuartzItemsValveMaintenanceManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public int AddValveMaintenance(QuartzItemsValveMaintenanceAddViewModel model)
        {
            using var context = new QuartzContext();
            var valveMaintenance = new QuartzItemsValveMaintenance()
            {
                KKSNo = model.KKSNo,
                SerialNo = model.SerialNo,
                SupplierManufacturare = model.SupplierManufacturare,
                Designation = model.Designation,
                IdealBarg = model.IdealBarg,
                OpeningPressureBarg = model.OpeningPressureBarg,
                Remarks = model.Remarks,
                TestDate = model.TestDate,
                Tested = model.Tested,
                AttachmentIds = model.AttachmentIds,
                QuartzItemId = model.QuartzItemId,
                PlantArea = model.PlantArea,
                CreatedDate = model.CreatedDate
            };

            context.QuartzItemsValveMaintenances.Add(valveMaintenance);
            context.SaveChanges();

            return valveMaintenance.Id;
        }

        public void DeleteValveMaintenance(QuartzItemsValveMaintenanceDeleteViewModel model)
        {
            Delete(_mapper.Map<QuartzItemsValveMaintenance>(model));
            _uow.SaveChange();
        }

        public List<QuartzItemsValveMaintenanceFilterViewModel> FilterValveMaintenances(QuartzItemsValveMaintenanceFilterViewModel model)
        {
            var filteredValveMaintenances = _mapper.Map<List<QuartzItemsValveMaintenanceFilterViewModel>>(GetAll());

            if (model.KKSNo != null)
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.KKSNo.Contains(model.KKSNo)).ToList();

            if (model.SerialNo != null)
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.SerialNo.Contains(model.SerialNo)).ToList();

            if (model.SupplierManufacturare != null)
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.SupplierManufacturare.Contains(model.SupplierManufacturare)).ToList();

            if (model.Designation != null)
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.Designation.Contains(model.Designation)).ToList();

            if (model.Remarks != null)
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.Remarks.Contains(model.Remarks)).ToList();

            if (model.TestDate.ToString() != "1.01.0001 00:00:00")
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.TestDate == model.TestDate).ToList();

            if (model.PlantArea != "value")
                filteredValveMaintenances = filteredValveMaintenances.Where(I => I.PlantArea == model.PlantArea).ToList();

            return filteredValveMaintenances;
        }

        public List<QuartzItemsValveMaintenanceListViewModel> GetAllValveMaintenances(int quartzItemId)
        {
            return _mapper.Map<List<QuartzItemsValveMaintenanceListViewModel>>(GetAll(I => I.QuartzItemId == quartzItemId));
        }

        public QuartzItemsValveMaintenanceUpdateViewModel GetValveMaintenanceDetail(int valveMaintenanceId)
        {
            return _mapper.Map<QuartzItemsValveMaintenanceUpdateViewModel>(GetFirstOrDefult(I => I.Id == valveMaintenanceId));
        }

        public void UpdateValveMaintenance(QuartzItemsValveMaintenanceUpdateViewModel model)
        {
            Update(_mapper.Map<QuartzItemsValveMaintenance>(model));
            _uow.SaveChange();
        }
    }
}
