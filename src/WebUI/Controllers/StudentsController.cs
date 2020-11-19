using ContosoUniversityAngular.Application.Students.Commands.CreateStudent;
using ContosoUniversityAngular.Application.Students.Commands.DeleteStudent;
using ContosoUniversityAngular.Application.Students.Commands.UpdateStudent;
using ContosoUniversityAngular.Application.Students.Queries.GetStudentDetails;
using ContosoUniversityAngular.Application.Students.Queries.GetStudentsForCourse;
using ContosoUniversityAngular.Application.Students.Queries.GetStudentsOverview;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class StudentsController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<StudentsOverviewVM>> GetAll(string sortOrder, string currentFilter, string searchString, int? pageNumber)
        {
            var vm = await Mediator.Send(new GetStudentsOverviewQuery(sortOrder, currentFilter, searchString, pageNumber));

            return Ok(vm);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<StudentDetailsVM>> Get(string id)
        {
            var vm = await Mediator.Send(new GetStudentDetailsQuery(int.Parse(id)));

            return Ok(vm);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(string id)
        {
            await Mediator.Send(new DeleteStudentCommand(int.Parse(id)));

            return NoContent();
        }

        [HttpGet("bycourse/{id}")]
        public async Task<ActionResult<StudentsForCourseVM>> ByCourse(string id)
        {
            var vm = await Mediator.Send(new GetStudentsForCourseQuery(int.Parse(id)));

            return Ok(vm);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody] CreateStudentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody] UpdateStudentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }
    }
}
