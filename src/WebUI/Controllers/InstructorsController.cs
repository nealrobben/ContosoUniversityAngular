using ContosoUniversityAngular.Application.Instructors.Commands.DeleteInstructor;
using ContosoUniversityAngular.Application.Instructors.Queries.GetInstructorsLookup;
using ContosoUniversityCQRS.Application.Instructors.Queries.GetInstructorsOverview;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class InstructorsController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<InstructorsOverviewVM>> GetAll()
        {
            var vm = await Mediator.Send(new GetInstructorsOverviewQuery());

            return Ok(vm);
        }

        [HttpGet("lookup")]
        public async Task<ActionResult<InstructorsLookupVM>> GetLookup()
        {
            var vm = await Mediator.Send(new GetInstructorLookupQuery());

            return Ok(vm);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(string id)
        {
            await Mediator.Send(new DeleteInstructorCommand(int.Parse(id)));

            return NoContent();
        }
    }
}
