using Microsoft.EntityFrameworkCore;
using shoesStoreApi.Models;

namespace shoesStoreApi.Context
{
    public class ApplicationContext : DbContext
    {

        public DbSet<LinkProductMaterials> LinkProductMaterials { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<Product> Products { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
