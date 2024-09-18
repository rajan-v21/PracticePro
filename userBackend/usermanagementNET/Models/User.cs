using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace usermanagementNET.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        [Column("Name", TypeName = "varchar(100)")]
        public string? Name { get; set; }

        [Column("DOB", TypeName = "varchar(10)")]
        public string? DOB { get; set; }

        [Column("Address", TypeName = "varchar(100)")]
        public string? Address { get; set; }

        [Column("Number", TypeName = "varchar(15)")]
        public string? Number { get; set; }

        [Column("Email", TypeName = "varchar(100)")]
        public string? Email { get; set; }

    }
}
