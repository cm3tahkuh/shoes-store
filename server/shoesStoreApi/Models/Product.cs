using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace shoesStoreApi.Models
{
    public class Product
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }

        public string Description { get; set; }
        
        [Column(TypeName = "Date")]
        public DateTime Outtime { get; set; }

        public decimal Price { get; set; }

        public List<LinkProductMaterials>? Materials { get; set; }
    }
}
