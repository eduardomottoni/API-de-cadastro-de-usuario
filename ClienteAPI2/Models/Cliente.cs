using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClienteAPI2.Models
{
    public class Cliente
    {
        [Key]
        public int IdUsuario { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string Nome { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string Datanasc { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(25)")]
        public string Senha { get; set; }
        [Column(TypeName = "int")]
        public int Genero { get; set; }
        [Column(TypeName = "int")]
        public int Status { get; set; }
        
    }
}
