using AutoMapper;
using Quartz.BusinessLogic.Interface.ISearch;
using Quartz.Common.ViewModels.Search.SearchTag;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Search;
using System.Collections.Generic;
using System.Linq;

namespace Quartz.BusinessLogic.Concrete.SearchManager
{
    public class SearchTagManager : GenericManager<SearchTag>, ISearchTagService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        public SearchTagManager(IUnitOfWork uow, IMapper mapper) : base(uow)
        {
            _uow = uow;
            _mapper = mapper;
        }
        public List<SearchTagListViewModel> FilterTags(SearchTagListViewModel model)
        {
            var filteredTags = _mapper.Map<List<SearchTagListViewModel>>(GetAll());

            if (model.TagNo != null)
                filteredTags = filteredTags.Where(I => I.TagNo.ToLower().Contains(model.TagNo.ToLower())).ToList();

            if (model.Description != null)
                filteredTags = filteredTags.Where(I => I.Description.ToLower().Contains(model.Description.ToLower())).ToList();

            if (model.FittingType != "value")
                filteredTags = filteredTags.Where(I => I.FittingType == model.FittingType).ToList();

            if (model.WeldType != "value")
                filteredTags = filteredTags.Where(I => I.WeldType == model.WeldType).ToList();

            if (model.PlantArea != "value")
                filteredTags = filteredTags.Where(I => I.PlantArea == model.PlantArea).ToList();

            if (model.PlantSystem != "value")
                filteredTags = filteredTags.Where(I => I.PlantSystem == model.PlantSystem).ToList();

            return filteredTags;
        }
    }
}
