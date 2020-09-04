﻿using ContosoUniversityAngular.Application.Common.Mappings;
using ContosoUniversityAngular.Domain.Entities;
using System.Collections.Generic;

namespace ContosoUniversityAngular.Application.TodoLists.Queries.GetTodos
{
    public class TodoListDto : IMapFrom<TodoList>
{
    public TodoListDto()
    {
        Items = new List<TodoItemDto>();
    }

    public int Id { get; set; }

    public string Title { get; set; }

    public IList<TodoItemDto> Items { get; set; }
}
}
