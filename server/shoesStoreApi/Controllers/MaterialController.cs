using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shoesStoreApi.Context;
using shoesStoreApi.Models;

namespace shoesStoreApi.Controllers
{

    [Route("[controller]")]
    public class MaterialController : ControllerBase
    {
        private ApplicationContext _context;

        public MaterialController(ApplicationContext context)
        {
            _context = context; 
        }

        [HttpGet]
        public async Task<List<Material>> GetAllAsync()
        {
           var result = await _context.Materials.ToListAsync();
            return result;
        }

        [HttpPost]
        public async Task<Material> AddAsync(Material material)
        {
            await _context.Materials.AddAsync(material);
            await _context.SaveChangesAsync();
            return material;
        }
    }
}
