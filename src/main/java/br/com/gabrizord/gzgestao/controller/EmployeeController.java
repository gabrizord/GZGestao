package br.com.gabrizord.gzgestao.controller;

import br.com.gabrizord.gzgestao.model.Employee;
import br.com.gabrizord.gzgestao.service.EmployeeService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public String viewEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            Model model) {

        Page<Employee> employeePage = employeeService.getPaginatedEmployees(page, size);
        model.addAttribute("employeePage", employeePage);

        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", employeePage.getTotalPages());
        model.addAttribute("totalItems", employeePage.getTotalElements());

        return "employee/colaboradores";
    }
}
