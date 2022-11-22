using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Quartz.Entities.Concrete.FileUploads;
using Quartz.Entities.Concrete.LookUpItems;
using Quartz.Entities.Concrete.Project.Item;
using Quartz.Entities.Concrete.Project.Link;
using Quartz.Entities.Concrete.Projects.Item;
using Quartz.Entities.Concrete.Search;
using Quartz.Entities.Concrete.Users;
using System;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Context
{
    public class QuartzContext : IdentityDbContext<AppUser, AppRole, int>
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.LogTo(Console.WriteLine).EnableSensitiveDataLogging();
            //optionsBuilder.UseSqlServer(@"Server=DESKTOP-P12SOIP\SQLEXPRESS;Database=Quartz4;uid=umutd;pwd=Ud4583!");
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-P12SOIP\SQLEXPRESS;Database=Quartz123;uid=umutd;pwd=Ud4583!");
            //optionsBuilder.UseSqlServer(@"Server=94.73.170.39;Database=u0406106_Quartz;uid=u0406106_quartz;pwd=ArlentusControl2013**");
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Configurate View's
            modelBuilder.Entity<SearchTag>(c =>
            {
                c.HasNoKey();
                c.ToView("vw_SearchTag");
            });

            modelBuilder.Entity<SearchDrawing>(c =>
            {
                c.HasNoKey();
                c.ToView("vw_SearchDrawing");
            });
            #endregion

            #region Create User
            var appUser = new AppUser
            {
                Id = 1,
                Email = "admin@quartz.com",
                NormalizedEmail = "ADMIN@QUARTZ.COM",
                LockoutEnabled = true,
                FirstName = "Admin",
                LastName = "Quartz",
                FullName = "Admin Quartz",
                UserName = "admin",
                NormalizedUserName = "ADMIN",
                SecurityStamp = Guid.NewGuid().ToString()
            };

            #region Set User Password
            PasswordHasher<AppUser> passwordHasher = new();
            appUser.PasswordHash = passwordHasher.HashPassword(appUser, "1");
            #endregion
            #endregion

            #region Seed User
            modelBuilder.Entity<AppUser>().HasData(appUser);
            #endregion

            #region Seed Role

            #region Admin
            modelBuilder.Entity<AppRole>().HasData(
                new AppRole
                {
                    Id = 1,
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                });
            #endregion

            #region Operator
            modelBuilder.Entity<AppRole>().HasData(
                new AppRole
                {
                    Id = 2,
                    Name = "Operator",
                    NormalizedName = "OPERATOR",
                    ConcurrencyStamp = Guid.NewGuid().ToString()
                });
            #endregion

            #endregion

            #region Set User Role

            #region To Admin
            modelBuilder.Entity<IdentityUserRole<int>>().HasData(new { UserId = 1, RoleId = 1 });
            #endregion

            #region To Operator

            #endregion

            #endregion

            #region Seed Main Link & Its Relations

            #region Main Link
            modelBuilder.Entity<QuartzLink>().HasData(new QuartzLink
            {
                Id = 1,
                TagNo = "Main",
                ShowLabel = true,
                CreatedDate = DateTime.Now,
                CreatedBy = "QUARTZ",
                MainQuartzLinkId = 0,
                CurrentDrawingId = 1,
                Hierarchy = "0"
            });
            #endregion

            #region Main Link's Drawing Settings
            modelBuilder.Entity<QuartzLinksDrawingSettings>().HasData(new QuartzLinksDrawingSettings
            {
                Id = 1,
                DrawingNo = "Main",
                Description = null,
                File = "1",
                PlantArea = "select",
                PlantSystem = "select",
                QuartzLinkId = 1,
                AttachmentIds = null
            });
            #endregion

            #region Main Link's File
            modelBuilder.Entity<FileUpload>().HasData(new FileUpload
            {
                Id = 1,
                Name = "MainDrawing",
                Type = "image/jpeg",
                Extension = ".jpg",
                Path = "wwwroot\\Files\\MainDrawing.jpg",
                UploadedBy = "QUARTZ",
                CreatedDate = DateTime.Now
            });
            #endregion

            #endregion

            base.OnModelCreating(modelBuilder);
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

        public DbSet<SearchTag> vw_SearchTag { get; set; }
        public DbSet<SearchDrawing> vw_SearchDrawing { get; set; }

    }
}
