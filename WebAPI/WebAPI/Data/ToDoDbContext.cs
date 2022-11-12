using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<ToDo> ToDos { get; set; }
    }
}
