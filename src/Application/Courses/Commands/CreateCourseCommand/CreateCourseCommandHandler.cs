﻿using ContosoUniversityAngular.Application.Common.Interfaces;
using ContosoUniversityAngular.Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace ContosoUniversityAngular.Application.Courses.Commands.CreateCourse
{
    public class CreateCourseCommandHandler : IRequestHandler<CreateCourseCommand>
    {
        private readonly ISchoolContext _context;

        public CreateCourseCommandHandler(ISchoolContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(CreateCourseCommand request, CancellationToken cancellationToken)
        {
            var course = new Course
            {
                CourseID = request.CourseID,
                Title = request.Title,
                Credits = request.Credits,
                DepartmentID = request.DepartmentID
            };

            _context.Courses.Add(course);
            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}
