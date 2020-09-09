﻿using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.Courses.Queries.GetCoursesOverview
{
    public class CoursesOverviewVM
    {
        public IList<CourseVM> Courses { get; }

        public CoursesOverviewVM(IList<CourseVM> courses)
        {
            Courses = courses;
        }
    }
}
