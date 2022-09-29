using AutoMapper;
using Quartz.BusinessLogic.Interface.ISearch;
using Quartz.Common.ViewModels.Search.SearchDrawing;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Search;
using System.Collections.Generic;
using System.Linq;

namespace Quartz.BusinessLogic.Concrete.SearchManager
{
    public class SearchDrawingManager : GenericManager<SearchDrawing>, ISearchDrawingService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public SearchDrawingManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public List<SearchDrawingListViewModel> FilterDrawings(SearchDrawingListViewModel model)
        {
            var filteredDrawings = _mapper.Map<List<SearchDrawingListViewModel>>(GetAll());

            if (model.TagNo != null)
                filteredDrawings = filteredDrawings.Where(I => I.TagNo != null && I.TagNo.ToLower().Contains(model.TagNo.ToLower())).ToList();

            if (model.Description != null)
                filteredDrawings = filteredDrawings.Where(I => I.Description != null && I.Description.ToLower().Contains(model.Description.ToLower())).ToList();

            if (model.PlantArea != "value")
                filteredDrawings = filteredDrawings.Where(I => I.PlantArea != null && I.PlantArea == model.PlantArea).ToList();

            if (model.PlantSystem != "value")
                filteredDrawings = filteredDrawings.Where(I => I.PlantSystem != null && I.PlantSystem == model.PlantSystem).ToList();

            return filteredDrawings;
        }
    }
}
