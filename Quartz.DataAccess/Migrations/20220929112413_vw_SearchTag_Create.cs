using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class vw_SearchTag_Create : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("CREATE VIEW vw_SearchTag AS SELECT QuartzItems.Id AS ItemId, QuartzItems.TagNo AS ItemTagNo, QuartzLinks.Id AS LinkId, QuartzLinks.TagNo AS LinkTagNo, QuartzItemsInformations.Specification AS Specification, QuartzItemsInformations.SerialNo AS SerialNo, QuartzItemsInformations.FittingType AS FittingType, QuartzItemsInformations.WeldType AS WeldType, QuartzLinksDrawingSettings.PlantArea AS PlantArea, QuartzLinksDrawingSettings.PlantSystem AS PlantSystem, QuartzLinksDrawingSettings.Description AS Description FROM QuartzItems INNER JOIN QuartzItemsInformations ON QuartzItems.Id = QuartzItemsInformations.QuartzItemId INNER JOIN QuartzLinks ON QuartzItems.QuartzLinkId = QuartzLinks.Id INNER JOIN QuartzLinksDrawingSettings ON QuartzLinks.Id = QuartzLinksDrawingSettings.QuartzLinkId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW vw_SearchTag");
        }
    }
}
