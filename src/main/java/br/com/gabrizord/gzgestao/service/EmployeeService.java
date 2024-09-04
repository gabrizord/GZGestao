package br.com.gabrizord.gzgestao.service;

import br.com.gabrizord.gzgestao.dto.EmployeeDTO;
import br.com.gabrizord.gzgestao.dto.EmployeeUpdateDTO;
import br.com.gabrizord.gzgestao.model.Employee;
import br.com.gabrizord.gzgestao.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee createEmployee(EmployeeDTO employeeDTO) {
        validateIfEmployeeAlreadyExists(employeeDTO);

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

    public Employee updateEmployee(Long id, EmployeeUpdateDTO employeeDTO) {
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Funcionário não encontrado"));

        if (employeeDTO.getEmail() != null && !employeeDTO.getEmail().equals(existingEmployee.getEmail())) {
            validateEmailChange(existingEmployee, employeeDTO.getEmail());
            existingEmployee.setEmail(employeeDTO.getEmail());
        }

        updateEmployeeFields(existingEmployee, employeeDTO);

        return employeeRepository.save(existingEmployee);
    }

    public Page<Employee> getPaginatedEmployees(int page, int size, String sortField, String sortDirection) {
        Sort sort = getSort(sortField, sortDirection);
        Pageable pageable = PageRequest.of(page, size, sort);
        return employeeRepository.findAll(pageable);
    }

    private void validateIfEmployeeAlreadyExists(EmployeeDTO employeeDTO) {
        Optional<Employee> employeeByName = employeeRepository.findByName(employeeDTO.getName());
        Optional<Employee> employeeByEmail = employeeRepository.findByEmail(employeeDTO.getEmail());

        if (employeeByName.isPresent() || employeeByEmail.isPresent()) {
            throw new IllegalArgumentException("Já existe um funcionário com este nome ou e-mail.");
        }
    }

    private void validateEmailChange(Employee existingEmployee, String newEmail) {
        if (!existingEmployee.getEmail().equals(newEmail)) {
            employeeRepository.findByEmail(newEmail).ifPresent(e -> {
                if (!e.getId().equals(existingEmployee.getId())) {
                    throw new IllegalArgumentException("E-mail já está em uso");
                }
            });
        }
    }

    private void updateEmployeeFields(Employee existingEmployee, EmployeeUpdateDTO employeeDTO) {
        if (employeeDTO.getName() != null && !employeeDTO.getName().equals(existingEmployee.getName())) {
            existingEmployee.setName(employeeDTO.getName());
        }
        if (employeeDTO.getPhoneNumber() != null && !employeeDTO.getPhoneNumber().equals(existingEmployee.getPhoneNumber())) {
            existingEmployee.setPhoneNumber(employeeDTO.getPhoneNumber());
        }
        if (employeeDTO.getPosition() != null && !employeeDTO.getPosition().equals(existingEmployee.getPosition())) {
            existingEmployee.setPosition(employeeDTO.getPosition());
        }
    }

    private Sort getSort(String sortField, String sortDirection) {
        return sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name())
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();
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