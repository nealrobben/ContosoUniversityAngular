using ContosoUniversityAngular.Application.Common.Exceptions;
using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Departments.Commands.UpdateDepartment
{
    public class UpdateDepartmentCommandHandler : IRequestHandler<UpdateDepartmentCommand>
    {
        private readonly ISchoolContext _context;

        public UpdateDepartmentCommandHandler(ISchoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateDepartmentCommand request, CancellationToken cancellationToken)
        {
            if (request.DepartmentID == null)
                throw new NotFoundException(nameof(Department),request.DepartmentID);

            var departmentToUpdate = await _context.Departments
                .Include(i => i.Administrator)
                .FirstOrDefaultAsync(m => m.DepartmentID == request.DepartmentID);

            if (departmentToUpdate == null)
                throw new NotFoundException(nameof(Department), request.DepartmentID);

            departmentToUpdate.Name = request.Name;
            departmentToUpdate.Budget = request.Budget;
            departmentToUpdate.StartDate = request.StartDate;
            departmentToUpdate.InstructorID = request.InstructorID;

            _context.Entry<Department>(departmentToUpdate).Property("RowVersion").OriginalValue = request.RowVersion;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
