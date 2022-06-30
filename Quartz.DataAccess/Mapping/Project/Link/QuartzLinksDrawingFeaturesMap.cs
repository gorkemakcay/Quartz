using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Quartz.Entities.Concrete.Project.Link;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Mapping.Project.Link
{
    public class QuartzLinksDrawingFeaturesMap : IEntityTypeConfiguration<QuartzLinksDrawingFeatures>
    {
        public void Configure(EntityTypeBuilder<QuartzLinksDrawingFeatures> builder)
        {
        }
    }
}
