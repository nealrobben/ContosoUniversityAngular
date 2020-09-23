using ContosoUniversityAngular.Application.Students.Commands.CreateStudent;
using ContosoUniversityAngular.Application.Students.Commands.DeleteStudent;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class StudentsController : ApiController
    {
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(string id)
        {
            await Mediator.Send(new DeleteStudentCommand(int.Parse(id)));

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody] CreateStudentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }
    }
}
