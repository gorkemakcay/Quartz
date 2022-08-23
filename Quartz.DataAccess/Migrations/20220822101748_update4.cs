using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class update4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AttachmentIds",
                table: "QuartzLinksDrawingSettings",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AttachmentIds",
                table: "QuartzLinksDrawingSettings");
        }
    }
}
