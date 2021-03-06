﻿using ContosoUniversityAngular.Application.Common.Exceptions;
using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Students.Commands.UpdateStudent
{
    public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand>
    {
        private readonly ISchoolContext _context;

        public UpdateStudentCommandHandler(ISchoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
        {
            if (request.StudentID == null)
                throw new NotFoundException(nameof(Student), request.StudentID);

            var studentToUpdate = await _context.Students
                .FirstOrDefaultAsync(s => s.ID == request.StudentID);

            studentToUpdate.FirstMidName = request.FirstName;
            studentToUpdate.LastName = request.LastName;
            studentToUpdate.EnrollmentDate = request.EnrollmentDate;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
