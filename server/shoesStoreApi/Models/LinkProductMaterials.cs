namespace shoesStoreApi.Models
{
    public class LinkProductMaterials
    {
        
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public Guid MaterialId { get; set; }

        //Навигацоинные свойства
        public Product? Product { get; set; }
        public Material? Material { get; set; }

    }
}
