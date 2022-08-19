using AutoMapper;
using Quartz.BusinessLogic.Interface.IProjectService.IItemService;
using Quartz.Common.ViewModels.Project.Item.QuartzItemsValveMaintenance;
using Quartz.DataAccess.Concrete.EntityFramworkCore.Context;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Project.Item;
using System.Collections.Generic;

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
            using (var context = new QuartzContext())
            {
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

                context.quartzItemsValveMaintenances.Add(valveMaintenance);
                context.SaveChanges();

                return valveMaintenance.Id;
            }
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
