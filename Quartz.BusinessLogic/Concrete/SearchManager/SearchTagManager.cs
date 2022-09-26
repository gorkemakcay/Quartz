using AutoMapper;
using Quartz.BusinessLogic.Interface.ISearch;
using Quartz.Common.ViewModels.Search.SearchTag;
using Quartz.DataAccess.UnitOfWorks.Interface;
using Quartz.Entities.Concrete.Search;
using System.Collections.Generic;

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



            return filteredTags;
        }
    }
}
