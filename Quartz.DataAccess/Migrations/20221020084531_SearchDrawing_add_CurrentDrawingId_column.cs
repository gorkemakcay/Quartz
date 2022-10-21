using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class SearchDrawing_add_CurrentDrawingId_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("CREATE VIEW vw_SearchDrawing AS SELECT QuartzLinks.Id AS LinkId, QuartzLinksDrawingSettings.DrawingNo AS TagNo, QuartzLinksDrawingSettings.Description AS Description, QuartzLinksDrawingSettings.PlantArea AS PlantArea, QuartzLinksDrawingSettings.PlantSystem AS PlantSystem, QuartzLinks.CurrentDrawingId FROM QuartzLinks INNER JOIN QuartzLinksDrawingSettings ON QuartzLinks.Id = QuartzLinksDrawingSettings.QuartzLinkId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW vw_SearchDrawing");
        }
    }
}
