using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Quartz.Entities.Concrete.FileUploads;
using Quartz.Entities.Concrete.LookUpItems;
using Quartz.Entities.Concrete.Project.Item;
using Quartz.Entities.Concrete.Project.Link;
using Quartz.Entities.Concrete.Projects.Item;
using Quartz.Entities.Concrete.Users;
using System;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Context
{
    public class QuartzContext : IdentityDbContext<AppUser, AppRole, int>
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.LogTo(Console.WriteLine).EnableSensitiveDataLogging();
            //optionsBuilder.UseSqlServer(@"Server=DESKTOP-P12SOIP\SQLEXPRESS;Database=Quartz2;uid=umutd;pwd=Ud4583!");
            //optionsBuilder.UseSqlServer(@"Server=DESKTOP-P12SOIP\SQLEXPRESS;Database=Quartz3;uid=umutd;pwd=Ud4583!");
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-P12SOIP\SQLEXPRESS;Database=Quartz4;uid=umutd;pwd=Ud4583!");
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<AppUser> AspNetUsers { get; set; }
        public DbSet<AppRole> AspNetRoles { get; set; }

        public DbSet<FileUpload> FileUploads { get; set; }

        public DbSet<QuartzLink> QuartzLinks { get; set; }
        public DbSet<QuartzLinksDrawingFeatures> QuartzLinksDrawingFeatures { get; set; }
        public DbSet<QuartzLinksDrawingSettings> QuartzLinksDrawingSettings { get; set; }

        public DbSet<QuartzItem> QuartzItems { get; set; }
        public DbSet<QuartzItemsInformation> QuartzItemsInformations { get; set; }
        public DbSet<QuartzItemsInspection> QuartzItemsInspections { get; set; }
        public DbSet<QuartzItemsValveMaintenance> QuartzItemsValveMaintenances { get; set; }
        public DbSet<QuartzItemsThicknessMeasurement> QuartzItemsThicknessMeasurements { get; set; }

        public DbSet<LookUpItemsComponentType> LookupItemsComponentTypes { get; set; }
        public DbSet<LookUpItemsFittingType> LookupItemsFittingTypes { get; set; }
        public DbSet<LookUpItemsMethod> LookupItemsMethods { get; set; }
        public DbSet<LookUpItemsOperator> LookupItemsOperators { get; set; }
        public DbSet<LookUpItemsPlantArea> LookupItemsPlantAreas { get; set; }
        public DbSet<LookUpItemsPlantSystem> LookupItemsPlantSystems { get; set; }
        public DbSet<LookUpItemsProcedure> LookupItemsProcedures { get; set; }
        public DbSet<LookUpItemsSpecification> LookupItemsSpecifications { get; set; }
        public DbSet<LookUpItemsStandardStatement> LookupItemsStandardStatements { get; set; }
        public DbSet<LookUpItemsStatus> LookupItemsStatuses { get; set; }
        public DbSet<LookUpItemsTechnique> LookupItemsTechniques { get; set; }
        public DbSet<LookUpItemsWeldType> LookupItemsWeldTypes { get; set; }

    }
}
