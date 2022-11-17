using Microsoft.EntityFrameworkCore.Migrations;

namespace Quartz.DataAccess.Migrations
{
    public partial class QuartzItem_addColumn_IsInspected : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsInspected",
                table: "QuartzItems",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsInspected",
                table: "QuartzItems");
        }
    }
}
