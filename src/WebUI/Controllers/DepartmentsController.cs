﻿using ContosoUniversityAngular.Application.Departments.Commands.DeleteDepartment;
using ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentDetails;
using ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentsOverview;
using ContosoUniversityAngular.Application.Departments.Commands.CreateDepartment;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ContosoUniversityAngular.Application.Departments.Queries.GetDepartmentsLookup;
using ContosoUniversityAngular.Application.Departments.Commands.UpdateDepartment;

namespace ContosoUniversityAngular.WebUI.Controllers
{
    public class DepartmentsController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<DepartmentsOverviewVM>> GetAll()
        {
            var vm = await Mediator.Send(new GetDepartmentsOverviewQuery());

            return Ok(vm);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<DepartmentDetailVM>> Get(string id)
        {
            var vm = await Mediator.Send(new GetDepartmentDetailsQuery(int.Parse(id)));

            return Ok(vm);
        }

        [HttpGet("lookup")]
        public async Task<ActionResult<DepartmentsLookupVM>> GetLookup()
        {
            var vm = await Mediator.Send(new GetDepartmentsLookupQuery());

            return Ok(vm);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(string id)
        {
            await Mediator.Send(new DeleteDepartmentCommand(int.Parse(id)));

            return NoContent();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Create([FromBody] CreateDepartmentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody] UpdateDepartmentCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }
    }
}
