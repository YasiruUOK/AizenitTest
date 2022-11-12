using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        private readonly ToDoDbContext _toDoDbContext;
        public ToDoController(ToDoDbContext toDoDbContext) {
            _toDoDbContext = toDoDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllToDos()
        {
            var toDoList = await _toDoDbContext.ToDos.ToListAsync();
            return Ok(toDoList);
        }

        [HttpPost]
        public async Task<IActionResult> AddToDo([FromBody] ToDo toDoRequest)
        {
            toDoRequest.Id = Guid.NewGuid();
            await _toDoDbContext.ToDos.AddAsync(toDoRequest);
            await _toDoDbContext.SaveChangesAsync();
            return Ok(toDoRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetToDo([FromRoute] Guid id)
        {
            var toDo = await _toDoDbContext.ToDos.FirstOrDefaultAsync(x=>x.Id==id);
            if (toDo == null)
            {
                return NotFound();
            }
            return Ok(toDo);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateToDo([FromRoute] Guid id, ToDo updateToDoRequest)
        {
            var toDo=await _toDoDbContext.ToDos.FindAsync(id);
            if(toDo==null)
            {
                return NotFound();
            }
            toDo.Title = updateToDoRequest.Title;
            toDo.SubTitle = updateToDoRequest.SubTitle;
            toDo.Date = updateToDoRequest.Date;

            await _toDoDbContext.SaveChangesAsync();
            return Ok(toDo);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteToDo([FromRoute] Guid id)
        {
            var toDo = await _toDoDbContext.ToDos.FindAsync(id);
            if (toDo == null)
            {
                return NotFound();
            }
            _toDoDbContext.ToDos.Remove(toDo);
            await _toDoDbContext.SaveChangesAsync();
            return Ok(toDo);    
        }
    }
}
