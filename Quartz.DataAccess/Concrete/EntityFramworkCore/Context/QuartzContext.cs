using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Quartz.Entities.Concrete.Documents;
using Quartz.Entities.Concrete.Projects;
using Quartz.Entities.Concrete.Projects.Items;
using Quartz.Entities.Concrete.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quartz.DataAccess.Concrete.EntityFramworkCore.Context
{
    public class QuartzContext : IdentityDbContext<AppUser, AppRole, int>
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-P12SOIP\SQLEXPRESS;Database=Quartz;uid=umutd;pwd=Ud4583!");
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<AppUser> AspNetUsers { get; set; }
        public DbSet<AppRole> AspNetRoles { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Entities.Concrete.Projects.Quartz> Quartzes { get; set; }
        public DbSet<Link> Links { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Information> Informations { get; set; }
        public DbSet<Inspection> Inspections { get; set; }

    }
}
