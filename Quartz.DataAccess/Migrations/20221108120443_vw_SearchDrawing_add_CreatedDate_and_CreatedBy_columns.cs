using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class vw_SearchDrawing_add_CreatedDate_and_CreatedBy_columns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("CREATE VIEW vw_SearchDrawing AS SELECT dbo.QuartzLinks.Id AS LinkId, dbo.QuartzLinks.MainQuartzLinkId AS MainLinkId, dbo.QuartzLinks.TagNo, dbo.QuartzLinks.CreatedDate, dbo.QuartzLinks.CreatedBy, dbo.QuartzLinksDrawingSettings.Description, dbo.QuartzLinksDrawingSettings.PlantSystem, dbo.QuartzLinksDrawingSettings.PlantArea, dbo.QuartzLinks.CurrentDrawingId FROM dbo.QuartzLinks INNER JOIN dbo.QuartzLinksDrawingSettings ON dbo.QuartzLinks.Id = dbo.QuartzLinksDrawingSettings.QuartzLinkId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW vw_SearchDrawing");
        }
    }
}
