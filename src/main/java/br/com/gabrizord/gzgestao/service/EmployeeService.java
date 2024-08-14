package br.com.gabrizord.gzgestao.service;

import br.com.gabrizord.gzgestao.dto.EmployeeDTO;
import br.com.gabrizord.gzgestao.model.Employee;
import br.com.gabrizord.gzgestao.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee saveEmployee(EmployeeDTO employeeDTO) {
        employeeRepository.findByName(employeeDTO.getName()).ifPresent(employee -> {
            throw new IllegalArgumentException("Já existe um funcionário com este nome.");
        });

        employeeRepository.findByEmail(employeeDTO.getEmail()).ifPresent(employee -> {
            throw new IllegalArgumentException("Já existe um funcionário com este e-mail.");
        });

        // Verificar se já existe um funcionário com o mesmo e-mail
        if (employeeRepository.findByEmail(employeeDTO.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Já existe um funcionário com este e-mail.");
        }

        Employee employee = convertToEntity(employeeDTO);
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    private Employee convertToEntity(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setName(employeeDTO.getName());
        employee.setPosition(employeeDTO.getPosition());
        employee.setEmail(employeeDTO.getEmail());
        employee.setPhoneNumber(employeeDTO.getPhoneNumber());
        return employee;
    }
}
