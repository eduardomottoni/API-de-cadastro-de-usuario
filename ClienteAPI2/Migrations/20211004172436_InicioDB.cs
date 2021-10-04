using Microsoft.EntityFrameworkCore.Migrations;

namespace ClienteAPI2.Migrations
{
    public partial class InicioDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(150)", nullable: true),
                    Datanasc = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Emaail = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Senha = table.Column<string>(type: "nvarchar(25)", nullable: true),
                    Genero = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.IdUsuario);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clientes");
        }
    }
}
