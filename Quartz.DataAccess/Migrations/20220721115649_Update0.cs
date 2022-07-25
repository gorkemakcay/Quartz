using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class Update0 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_QuartzItemsInspections_QuartzItemId",
                table: "QuartzItemsInspections");

            migrationBuilder.CreateIndex(
                name: "IX_QuartzItemsInspections_QuartzItemId",
                table: "QuartzItemsInspections",
                column: "QuartzItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_QuartzItemsInspections_QuartzItemId",
                table: "QuartzItemsInspections");

            migrationBuilder.CreateIndex(
                name: "IX_QuartzItemsInspections_QuartzItemId",
                table: "QuartzItemsInspections",
                column: "QuartzItemId",
                unique: true);
        }
    }
}
